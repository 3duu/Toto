import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { ColorClass } from '../styles/styles';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnChanges {

  visible : boolean = false;
  message : string = "";
  type : ColorClass = ColorClass.danger;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    alert('rrrrrr');
    if (changes['input'] && changes['input'].currentValue !== changes['input'].previousValue) {
      //this.currentNumber = this.data.someOtherNumber+this.input.numberIneed;
    }
  }

  show(message : string, type : ColorClass) : void {
    this.message = message;
    this.visible = true;
    this.type = type;
  }

  remove() : void {
    this.visible = false;
  }

}
