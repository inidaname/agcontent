import { Component, OnInit } from '@angular/core';
import { faChartLine, faDoorOpen, faGlassMartiniAlt, faHome, faTruckLoading, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { MoveStatusService } from '../../services/move-status.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faHome = faHome;
  faDoors = faDoorOpen;
  faTumbler = faGlassMartiniAlt;
  faBars = faChartLine;
  faPie = faTruckLoading;
  faUser = faUserCircle;

  sideStatus: Observable<any>;

  constructor(
    private sideBarEffect: MoveStatusService
  ) {
    this.sideStatus = this.sideBarEffect.sideBarChange;
  }

  ngOnInit(): void {
  }

}
