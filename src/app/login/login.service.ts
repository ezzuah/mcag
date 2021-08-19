import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})

export class LoginService {


  constructor(public http: HttpClient) {}


  login(username: string, password: string) {
    return this.http.post(API_URL + `/login`, {username,password});
  }



}

