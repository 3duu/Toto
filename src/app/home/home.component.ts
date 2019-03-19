import { Component } from '@angular/core';
import { ApiService } from '../service/services';
import { AppBase } from '../appbase';

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
