import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { MoveStatusService } from '../../services/move-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBar = faBars;
  status: boolean;
  authenticated: boolean;
  userDetail: any;

  constructor(
    private sideBarEffect: MoveStatusService,
    private auth: AuthService
  ) {
    this.status = false;
    this.authenticated = false;
  }

  ngOnInit(): void {
    this.authenticated = this.auth.verifyToken();
    if (this.authenticated) {
      this.userDetail = this.auth.decodeUser();
    }
  }

  sideBar() {
    this.status = !this.status;
    this.sideBarEffect.setSideBar(this.status);
    this.status = !this.status;
  }

}
