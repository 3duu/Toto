import { AppBase } from './../../appbase';
import { Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReturnCode } from 'src/app/entity/system';
import { SessionService } from 'src/app/session/session.service';

export interface ClickableComponent {
    onClicked() : void;
}
  
export interface ClickEventArgs {
    posX : number;
    posY : number;
}

export interface ReturnCodeEventArgs {
    code : ReturnCode;
    message? : string | null;
    result? : any | null;
}

export class ButtonComponent extends AppBase {
    
    @Output() click = new EventEmitter();
    @Output() begin = new EventEmitter();
    @Output() done = new EventEmitter();
    @Input() classes : string;
    @Input() form: NgForm;
    @Input() hidden : boolean;

    constructor(session : SessionService) {
        super(session);
    }

    ngOnInit() {

    }

    stopLoading() {
        this.loading = false;
    }
}