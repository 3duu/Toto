import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {

  }

  protected visible : boolean = false;

  show(){
    this.visible = true;
  }

  hide(){
    this.visible = false;
  }

}
