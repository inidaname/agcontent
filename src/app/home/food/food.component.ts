import { Component, OnInit } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { Intercepter } from 'src/app/shared/services/intercepter';

@Component({
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  switchFood: string;
  faLock = faBuilding;
  // tableContent: Observable<Intercepter>;

  constructor(
    private api: ApiService
  ) {
    this.switchFood = 'createFood';
    // this.tableContent = this.api.getAllFood();
  }

  ngOnInit(): void {
    this.api.getAllFood().subscribe(e => console.log(e))
  }

  setSwitch(switchState: string) {
    this.switchFood = switchState;
  }

}
