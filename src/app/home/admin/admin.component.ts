import { Component, OnInit } from '@angular/core';
import { faBahai, faBuilding, faChartBar, faEnvelope, faLock, faPhone, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { Food } from 'src/app/shared/services/intercepter';

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
  tableAdmin: Observable<any>;

  constructor(
    private api: ApiService
  ) {
    this.switchAdmin = 'adminTable';
    this.classSet = false;
    this.tableAdmin = this.api.getAllAdmins();
  }

  ngOnInit(): void {
    this.api.getAllAdmins().subscribe(e => console.log(e))
  }

  setTheClass() {
    this.classSet = !this.classSet;
    console.log(this.classSet)
  }

  setSwitch(switchState: string) {
    this.switchAdmin = switchState;
  }

}
