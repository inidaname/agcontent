import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoveStatusService {

  private sideBarEffect: BehaviorSubject<any>;
  public sideBarChange: Observable<boolean>

  constructor() {
    this.sideBarEffect = new BehaviorSubject(false);
    this.sideBarChange = this.sideBarEffect.asObservable()
  }

  public setSideBar(status: boolean) {
    this.sideBarEffect.next(status);
  }
}
