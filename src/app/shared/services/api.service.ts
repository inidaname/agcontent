import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class ApiService {

  apilink = `https://menage-food-ordering-app.herokuapp.com`;
  constructor(private httpClient: HttpClient) { }

  getAPI () {
    return this.httpClient.get(this.apilink);
  }

}
