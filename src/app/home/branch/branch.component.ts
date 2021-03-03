import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faBahai, faBuilding, faChartBar, faMapMarker, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';
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
  assignAdmin: FormGroup;
  adminBind: any;
  mobile: any;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    this.mobile = null;
    this.switchBranch = 'createBranch';
    this.tableBranch = this.api.getBranch();
    this.listAdmins = this.api.getAllAdmins();
    this.createBranchForm = this.fb.group({
      admins: ['', Validators.required],
      name: ['', Validators.required],
      location: ['', Validators.required],
      contacts: [{mobile: this.mobile}]
    });

    this.assignAdmin = this.fb.group({
      admins: ['', Validators.required],
      branch: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.tableBranch.subscribe(e => console.log(e));
  }

  setGetAdmin(item: string) {
    console.log(item)
    let here = this
    this.listAdmins.subscribe(
      e => {
        e.data.filter((v) => {
          if (v._id === item) {
            here.createBranchForm.controls.contacts.setValue({mobile: v.mobile})
            console.log(v)
          }
        })
      }
    )
  }

  createBranch() {
    console.log(this.createBranchForm.value)
    if (this.createBranchForm.valid) {
      this.createBranchForm.controls.admins.disable()
      this.api.createBranch(this.createBranchForm.value).subscribe(e => {
        console.log(e);
      }, err => {
        console.log(err)
      })
    }
  }

  setSwitch(switchState: string) {
    this.switchBranch = switchState;
  }

}
