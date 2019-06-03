import { ColorClass } from './../../styles/styles';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() visible : boolean;
  @Input() message : string;
  @Input() type : ColorClass;

  constructor() { 
    this.visible = false;
  }

  ngOnInit() {
  }

  show(message : string, type : ColorClass) : void {
    this.message = message;
    this.visible = true;
    this.type = type;
  }

  hide() : void {
    this.message = null;
    this.visible = false;
    this.type = null;
  }

}
