import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private router: Router) {

  }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers: HttpHeaders;

    headers = this.setHeaders(httpRequest);

    const clonedReq = httpRequest.clone({ headers });

    return next.handle(clonedReq).pipe(
      catchError((err) => {
        console.log('INTERCEPTOR ERROR ==> ', err);
        if (err.status === 401 ) {
          localStorage.clear();
          this.router.navigate(['/login']);
        }

        if (!err.error) {
          return throwError('Something unusual happened!');
        }

        const {error: { errors, message },statusText,} = err;

        if (Array.isArray(errors) && errors.length) {
          const [firstError] = errors;
          // if (firstError?.error) {
          //   return throwError(firstError?.error);
          // }
          const { field, message: fieldMessage } = firstError;
          return throwError(fieldMessage);
        }
        return throwError(message || 'Something unusual happened!');
      })
    );

  }


  setHeaders(request: HttpRequest<any>): HttpHeaders {

    const token: string = localStorage.getItem('token');

    let headers = request.headers
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json');


    if (token) {
       headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }
}
