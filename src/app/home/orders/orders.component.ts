import { Component, OnInit } from '@angular/core';
import { faBahai, faBuilding, faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  switchOrder: string;
  faLock = faBuilding;
  faBars = faChartBar;
  faBarSolid = faBahai;

  constructor() {
    this.switchOrder = 'orderTable';
  }

  ngOnInit(): void {
  }

  orderSwitch(switchState: string) {
    this.switchOrder = switchState;
  }

}
