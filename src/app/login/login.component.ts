import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
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
    this.loginService.login(fv.username, fv.password).subscribe((response) => {
      if (response) {
        console.log(response)
      }
    }, err => {
      this.toast.error(err)
    })
  }

}
