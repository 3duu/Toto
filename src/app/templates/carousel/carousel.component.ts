import { AppBase } from './../../appbase';
import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Output() nextClicked = new EventEmitter();
  @Output() previousClicked = new EventEmitter();
  @Output() endReached = new EventEmitter();

  @Input() startsWith : number;

  @Input() contents : any[];

  constructor() {
    
  }

  pages : AppBase[] = [];

  ngOnInit() {
  }

}
