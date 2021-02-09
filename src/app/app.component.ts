import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoveStatusService } from './shared/services/move-status.service';

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
    private sideEffect: MoveStatusService
  ) {
    this.sideBar = this.sideEffect.sideBarChange;
    this.closeSide = false;
  }

  closeSideBar() {
    this.sideEffect.setSideBar(this.closeSide);
  }
}
