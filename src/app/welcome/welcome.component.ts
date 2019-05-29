import { SessionService } from './../session/session.service';
import { Component } from '@angular/core';
import { AppBase } from './../appbase';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends AppBase {

  constructor(session : SessionService) {
    super(session);
  }

  ngOnInit() : void {
    this.menu.disable = true;
  }

}
