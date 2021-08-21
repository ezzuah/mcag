import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})

export class MembersService {


  constructor(public http: HttpClient) {}


  getMembers() {
    const headers = this.getHeaders();
    return this.http.get(API_URL + `/members`, {headers});
  }



  addNew(payload: any) {
    const headers = this.getHeaders();
    return this.http.post(API_URL + `/members`, payload, {headers})
  }



  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('mcagToken');
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
  }



}

