import { Component, OnInit } from '@angular/core';
import { faBahai, faBuilding, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Intercepter } from 'src/app/shared/services/intercepter';

@Component({
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  switchOrder: string;
  faLock = faBuilding;
  faBars = faChartBar;
  faBarSolid = faBahai;
  tableContent: Observable<Intercepter>;

  constructor(
    private auth: AuthService,
    private api: ApiService
  ) {
    this.switchOrder = 'orderTable';
    this.tableContent = this.api.getAllOrder();
  }

  ngOnInit(): void {
    this.auth.verifyToken$();
    this.api.getAllOrder().subscribe(e => console.log(e))
  }

  orderSwitch(switchState: string) {
    this.switchOrder = switchState;
  }

}
