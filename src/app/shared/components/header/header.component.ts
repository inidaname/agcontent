import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
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
  authenticated: Observable<boolean>;
  userDetail: any;

  constructor(
    private sideBarEffect: MoveStatusService,
    public auth: AuthService,
    private route: Router
  ) {
    this.status = false;
    this.authenticated = this.auth.tokenChange;
  }

  ngOnInit(): void {
    this.auth.verifyToken$();
  }

  sideBar() {
    this.status = !this.status;
    this.sideBarEffect.setSideBar(this.status);
    this.status = !this.status;
  }

  logoutUser() {
    this.auth.logoutUser();
    this.route.navigate(['/login']);
    this.auth.verifyToken$();
    return;
  }
}
