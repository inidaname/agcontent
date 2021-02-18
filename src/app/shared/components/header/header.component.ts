import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private auth: AuthService,
    private route: Router
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

  logoutUser() {
    this.auth.logoutUser();
    this.route.navigate(['/login']);
    return;
  }
}
