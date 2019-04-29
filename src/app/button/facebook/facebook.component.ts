import { ButtonComponent, ClickableComponent } from './../button-classes';
import { Component, AfterViewInit } from '@angular/core';
import { StringUtils } from '../../utils';
import { SociaNetworkType, FacebookService } from '../../socialNetwork/socialNetworkServices';

@Component({
  selector: 'facebook-button',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent extends ButtonComponent implements ClickableComponent, AfterViewInit {

  constructor(private api : FacebookService) {
    super();
  }

  sociaNetworkType : SociaNetworkType = SociaNetworkType.FACEBOOK;

  ngOnInit() {
    this.api.config();
  }

  ngAfterViewInit(): void {
    if(StringUtils.isEmpty(this.classes)){
      this.classes = "btn btn-lg btn-petlife btn-block btn-center";
    }
  }

  private callback() : void {

  }

  private do() : void {
    this.api.login(this.callback);
  }

  onClicked() : void {

  }

  onSignedUp() : void {

  }

}
