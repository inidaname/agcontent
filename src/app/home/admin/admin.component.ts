import { Component, OnInit } from '@angular/core';
import { faBahai, faBuilding, faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  switchAdmin: string;
  faLock = faBuilding;
  faBars = faChartBar;
  faBarSolid = faBahai;

  constructor() {
    this.switchAdmin = 'adminTable';
  }

  ngOnInit(): void {
  }

  setSwitch(switchState: string) {
    this.switchAdmin = switchState;
  }

}
