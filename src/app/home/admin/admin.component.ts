import { Component, OnInit } from '@angular/core';
import { faBahai, faBuilding, faChartBar, faEnvelope, faLock, faPhone, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  switchAdmin: string;
  faBars = faChartBar;
  faBarSolid = faBahai;
  faUser = faUser;
  faGroup = faUsers;
  faEnv = faEnvelope;
  faLock = faLock;
  faPhone = faPhone;
  faUserSuit = faUser;
  classSet: boolean;

  constructor() {
    this.switchAdmin = 'adminTable';
    this.classSet = false;
  }

  ngOnInit(): void {
  }

  setTheClass() {
    this.classSet = !this.classSet;
    console.log(this.classSet)
  }

  setSwitch(switchState: string) {
    this.switchAdmin = switchState;
  }

}
