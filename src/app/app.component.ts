import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { MoveStatusService } from './shared/services/move-status.service';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agiri';
  sideBar: Observable<boolean>;
  closeSide: boolean;

  constructor (
    private sideEffect: MoveStatusService,
    private router: Router
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

  closeSideBar() {
    this.sideEffect.setSideBar(this.closeSide);
  }
}
