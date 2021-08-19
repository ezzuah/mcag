import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  constructor() { }


  getLogInStatus() {
    return JSON.parse(localStorage.getItem('mcagToken'))
  }
}
