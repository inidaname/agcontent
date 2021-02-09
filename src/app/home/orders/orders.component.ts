import { Component, OnInit } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

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
