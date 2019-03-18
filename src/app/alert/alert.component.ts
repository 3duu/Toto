import { Component, OnInit } from '@angular/core';
import { ColorClass } from '../styles/styles';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  visible : boolean = false;

  constructor(private message : string, private type : ColorClass) { }

  ngOnInit() {
  }

  show() : void {
    this.visible = true;
  }

  remove() : void {
    this.visible = true;
  }

}
