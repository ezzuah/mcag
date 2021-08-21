import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})

export class GroupMinistriesService {


  constructor(public http: HttpClient) {}


  getMinistries() {
    const headers = this.getHeaders();
    return this.http.get(API_URL + `/ministries`, {headers});
  }

  getGroups() {
    const headers = this.getHeaders();
    return this.http.get(API_URL + `/groups`, {headers});
  }

  getEducationalLevels() {
    const headers = this.getHeaders();
    return this.http.get(API_URL + `/educational-levels`, {headers});
  }


  addNew(payload: any) {
    const headers = this.getHeaders();
    if (payload.type === 'ministries') {
      delete payload.type
    return this.http.post(API_URL + `/ministries`, payload, {headers})
    }

    if (payload.type === 'groups') {
      delete payload.type
      return this.http.post(API_URL + `/groups`, payload, {headers})
    }

    if (payload.type === 'education') {
      delete payload.type
      return this.http.post(API_URL + `/educational-levels`, payload, {headers})
      }
  }



  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('mcagToken');
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
  }



}

