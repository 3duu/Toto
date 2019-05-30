import { ButtonComponent, ClickableComponent } from './../button-classes';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoogleService, SociaNetworkType } from '../../../socialNetwork/socialNetworkServices';
import { SessionService } from '../../../session/session.service';
import { ObjectUtils } from '../../../utils';


@Component({
  selector: 'google-button',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent extends ButtonComponent implements ClickableComponent {

  constructor(private api : GoogleService, session : SessionService) {
    super(session);
  }

  sociaNetworkType : SociaNetworkType = SociaNetworkType.GOOGLE;

  ngOnInit() {
    this.api.config();
  }

  private callback() : void {

  }

  do(form: NgForm) : void {
    
    if(this.loading){
      return;
    }

    this.loading = true;
    
    if(!ObjectUtils.isEmpty(form)){
      this.form = form;
    }
    this.api.login(this.callback);
  }

  onClicked() : void {

  }

}
