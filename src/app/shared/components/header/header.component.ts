import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MoveStatusService } from '../../services/move-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBar = faBars;
  status: boolean;

  constructor(
    private sideBarEffect: MoveStatusService
  ) {
    this.status = false;
  }

  ngOnInit(): void {
  }

  sideBar() {
    console.log(this.status);
    this.status = !this.status;
    this.sideBarEffect.setSideBar(this.status);
    this.status = !this.status;
  }

}
