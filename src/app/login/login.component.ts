import { GlobalService } from './../services/global.service';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private global: GlobalService,
              private toast: ToastrService) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  ngOnInit() {
  }

  doLogin() {
    const fv = this.loginForm.value;
    this.loginService.login(fv.username, fv.password).subscribe((response: any) => {
      if (response) {
        console.log(response)
        this.global.adminData = response;
        localStorage.setItem('mcagAdmin', JSON.stringify(response));
        localStorage.setItem('mcagToken', response.token)
        this.router.navigate(['/dashboard']);
      }
    }, err => {
      this.toast.error(err)
    })
  }

}
