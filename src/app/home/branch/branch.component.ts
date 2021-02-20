import { Component, OnInit } from '@angular/core';
import { faBahai, faBuilding, faChartBar, faMapMarker, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { Food } from 'src/app/shared/services/intercepter';

@Component({
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  switchBranch: string;
  faLock = faBuilding;
  faBars = faChartBar;
  faBarSolid = faBahai;
  faUser = faUser;
  faBranch = faMapMarkerAlt;
  tableBranch: Observable<Food>;

  constructor(
    private api: ApiService
  ) {
    this.switchBranch = 'createBranch';
    this.tableBranch = this.api.getBranch();
  }

  ngOnInit(): void {
  }

  setSwitch(switchState: string) {
    this.switchBranch = switchState;
  }

}
