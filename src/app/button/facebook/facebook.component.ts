import { SessionService } from './../../session/session.service';
import { ButtonComponent, ClickableComponent } from './../button-classes';
import { Component } from '@angular/core';
import { ObjectUtils } from '../../utils';
import { SociaNetworkType, FacebookService } from '../../socialNetwork/socialNetworkServices';
import { NgForm } from '@angular/forms';
import { ReturnCode } from 'src/app/entity/system';

@Component({
  selector: 'facebook-button',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent extends ButtonComponent implements ClickableComponent {

  constructor(private api : FacebookService, session : SessionService) {
    super(session);
  }

  sociaNetworkType : SociaNetworkType = SociaNetworkType.FACEBOOK;

  ngOnInit() {
    this.api.config();
  }

  private callback = (args) => {
    console.log(args);
    if(args.code == ReturnCode.SUCCESS){
      this.session.authenticationService.authenticate(args.result, this.login, this.session.setUserInSession);
    }
    else {
      this.loading = false;
      this.done.emit(args);
    }
  }

  private login = (args) => {
    console.log(args);
    this.done.emit(args);
    this.loading = false;
  }

  do(form: NgForm) : void {
    
    if(this.loading){
      return;
    }
    this.loading = true;
    this.begin.emit();
    if(!ObjectUtils.isEmpty(form)){
      this.form = form;
    }
    this.api.login(this.callback);
  }

  onClicked() : void {

  }

}
