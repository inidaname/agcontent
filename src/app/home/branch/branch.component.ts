import { Component, OnInit } from '@angular/core';
import { faBahai, faBuilding, faChartBar, faMapMarker, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  switchBranch: string;
  faLock = faBuilding;
  faBars = faChartBar;
  faBarSolid = faBahai;
  faUser = faUser;
  faBranch = faMapMarkerAlt;

  constructor() {
    this.switchBranch = 'createBranch';
  }

  ngOnInit(): void {
  }

  setSwitch(switchState: string) {
    this.switchBranch = switchState;
  }

}
