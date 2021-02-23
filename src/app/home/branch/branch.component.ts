import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  listAdmins: Observable<Food>;
  createBranchForm: FormGroup;

  constructor(
    private api: ApiService,
    private fb: FormBuilder
  ) {
    this.switchBranch = 'createBranch';
    this.tableBranch = this.api.getBranch();
    this.listAdmins = this.api.getAllAdmins();
    this.createBranchForm = this.fb.group({
      admins: ['', Validators.required],
      name: ['', Validators.required],
      location: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.tableBranch.subscribe(e => console.log(e));
  }

  setSwitch(switchState: string) {
    this.switchBranch = switchState;
  }

}
