import { Component, OnInit } from '@angular/core';
import { faBahai, faBeer, faBuilding, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Food, Intercepter } from 'src/app/shared/services/intercepter';

@Component({
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  switchOrder: string;
  faLock = faBuilding;
  faBars = faChartBar;
  faCup = faBeer;
  faBarSolid = faBahai;
  tableContent: Observable<Intercepter>;
  branchList: Observable<Food>;
  dataBind: any;

  constructor(
    private api: ApiService
  ) {
    this.switchOrder = 'orderTable';
    this.tableContent = this.api.getAllOrder();
    this.branchList = this.api.getBranch()
  }

  ngOnInit(): void {
    this.api.getBranch().subscribe(e => console.log(e))
  }

  orderSwitch(switchState: string) {
    this.switchOrder = switchState;
  }

  checkData(event: any) {
    console.log(event)
  }

}
