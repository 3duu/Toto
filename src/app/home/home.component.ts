import { AppBase } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppBase {

  constructor(api: ApiService) {
    super(api);
  }

  ngOnInit() {
  }

}
