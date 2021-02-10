import { Component, OnInit } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

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
