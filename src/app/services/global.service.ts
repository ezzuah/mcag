import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  adminData: any;


  constructor() {
    this.adminData = JSON.parse(localStorage.getItem('mcagAdmin'));
  }


  getLogInStatus() {
    if (localStorage.getItem('mcagToken') === null) {
      return false
    } else {
      return true
    }
  }
}
