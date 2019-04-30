import { ButtonComponent, ClickableComponent } from './../button-classes';
import { Component } from '@angular/core';
import { ObjectUtils } from '../../utils';
import { SociaNetworkType, GoogleService } from '../../socialNetwork/socialNetworkServices';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'google-button',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent extends ButtonComponent implements ClickableComponent {

  constructor(private api : GoogleService) {
    super();
  }

  sociaNetworkType : SociaNetworkType = SociaNetworkType.GOOGLE;

  ngOnInit() {
    this.api.config();
  }

  private callback() : void {

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
