import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock, faPersonBooth } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faPerson = faUser;
  faLock = faLock;

  constructor() { }

  ngOnInit(): void {
  }

}
