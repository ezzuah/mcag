import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})

export class SundaySchoolService {


  constructor(public http: HttpClient) {}


  getClasses() {
    const headers = this.getHeaders();
    return this.http.get(API_URL + `/sunday-school-classes`, {headers});
  }


  addNew(payload: any) {
    const headers = this.getHeaders();
    return this.http.post(API_URL + `/sunday-school-classes`, payload, {headers})
  }



  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('mcagToken');
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
  }



}

