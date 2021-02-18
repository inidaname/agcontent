import { Component, OnInit } from '@angular/core';
import { faBahai, faBuilding, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  switchOrder: string;
  faLock = faBuilding;
  faBars = faChartBar;
  faBarSolid = faBahai;

  constructor(
    private auth: AuthService
  ) {
    this.switchOrder = 'orderTable';
  }

  ngOnInit(): void {
    this.auth.verifyToken$();
  }

  orderSwitch(switchState: string) {
    this.switchOrder = switchState;
  }

}
