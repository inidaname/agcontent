import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoveStatusService } from './shared/services/move-status.service';
import { filter } from 'rxjs/operators'
import { ApiService } from './shared/services/api.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'agiri';
  sideBar: Observable<boolean>;
  closeSide: boolean;

  constructor (
    private sideEffect: MoveStatusService,
    private router: Router,
    private api: ApiService,
    private auth: AuthService
  ) {
    this.sideBar = this.sideEffect.sideBarChange;
    this.closeSide = false;
    router.events.pipe(
      filter((e: any): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      if(e instanceof NavigationEnd) {
        this.closeSideBar();
      }
    });
  }

  ngOnInit() {
    this.auth.verifyToken();
    this.auth.verifyToken$();
  }

  closeSideBar() {
    this.sideEffect.setSideBar(this.closeSide);
  }
}
