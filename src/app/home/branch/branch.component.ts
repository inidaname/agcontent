import { Component, OnInit } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  switchSide: string;
  faLock = faBuilding;

  constructor() {
    this.switchSide = 'table';
  }

  ngOnInit(): void {
  }

  setSwitch(switchState: string) {
    this.switchSide = switchState;
  }

}
