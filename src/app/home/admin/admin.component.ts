import { Component, OnInit } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';


@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
