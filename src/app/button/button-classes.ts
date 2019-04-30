import { ReturnCode } from "../service/services";
import { ColorClass } from "../styles/styles";
import { AppBase } from '../appbase';
import { Output, Input, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';

export interface ClickableComponent {
    onClicked() : void;
}
  
export interface ClickEventArgs {
    posX : number;
    posY : number;
}

export interface ReturnCodeEventArgs {
    code : ReturnCode;
    color : ColorClass;
    message : string;
}

export class ButtonComponent extends AppBase {
    
  @Output() click = new EventEmitter();
  @Output() success = new EventEmitter();
  @Output() error = new EventEmitter();
  @Output() begin = new EventEmitter();
  @Output() done = new EventEmitter();
  @Input() classes : string;
  @Input() form: NgForm;
  @Input() hidden: boolean = false;

  ngOnInit() {

  }
}