import { Component, OnInit } from '@angular/core';
import { faBahai, faBuilding, faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  switchBranch: string;
  faLock = faBuilding;
  faBars = faChartBar;
  faBarSolid = faBahai;

  constructor() {
    this.switchBranch = 'branchTable';
  }

  ngOnInit(): void {
  }

  setSwitch(switchState: string) {
    this.switchBranch = switchState;
  }

}
