import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faBahai, faBeer, faBuilding, faChartBar, faPlus } from '@fortawesome/free-solid-svg-icons';
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
  faPlus = faPlus;
  faBarSolid = faBahai;
  tableContent: Observable<Intercepter>;
  branchList: Observable<Food>;
  dataBind: any;
  orderTrayForm: FormGroup;

  constructor(
    private api: ApiService,
    private fb: FormBuilder
  ) {
    this.switchOrder = 'orderTable';
    this.tableContent = this.api.getAllOrder();
    this.branchList = this.api.getBranch()
    this.orderTrayForm = this.fb.group({
      getBranch: ['', Validators.required],
      getMenuList: ['', Validators.required],
      trayQuantity: ['', Validators.required]
    });
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
