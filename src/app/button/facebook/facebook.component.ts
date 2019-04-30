import { ButtonComponent, ClickableComponent } from './../button-classes';
import { Component } from '@angular/core';
import { ObjectUtils } from '../../utils';
import { SociaNetworkType, FacebookService } from '../../socialNetwork/socialNetworkServices';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'facebook-button',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent extends ButtonComponent implements ClickableComponent {

  constructor(private api : FacebookService) {
    super();
  }

  sociaNetworkType : SociaNetworkType = SociaNetworkType.FACEBOOK;

  ngOnInit() {
    this.api.config();
  }

  private callback() : void {
    alert("done");
  }

  do(form: NgForm) : void {
    
    if(!ObjectUtils.isEmpty(form)){
      this.form = form;
    }
    this.api.login(this.callback);
  }

  onClicked() : void {

  }

}
