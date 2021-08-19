import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})

export class LoginService {

  private isLoggedIn = false;

  constructor(public http: HttpClient) {}


  login(username: string, password: string) {
    return this.http.post(API_URL + `/validate`, {username,password});
  }



}

