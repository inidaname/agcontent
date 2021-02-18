import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock, faPersonBooth } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faPerson = faUser;
  faLock = faLock;
  loginForm: FormGroup;
  checkingStatus: boolean;
  errMsg: string;
  hasError: boolean;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.checkingStatus = false;
    this.errMsg = '';
    this.hasError = false;
  }

  ngOnInit(): void {
  }

  loginUser(){
    this.checkingStatus = true;
    this.hasError = false;
    if (this.loginForm.valid)
      this.api.adminLogin(this.loginForm.value).subscribe(
        (e: any) => {
          this.checkingStatus = false;
          if (e.success === true) {
            localStorage.setItem('access-token', e.data.accessToken);
            localStorage.setItem('refresh-token', e.data.refreshToken);
            this.route.navigate(['/orders']);
            return;
          }
        }, err => {
          if (err) {
            this.checkingStatus = false;
            this.errMsg = err.error;
            this.hasError = true;
          }
        });
  }

}
