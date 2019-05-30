import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterContentInit {
  
  @Output() nextClicked = new EventEmitter();
  @Output() previousClicked = new EventEmitter();
  @Output() endReached = new EventEmitter();

  @Input("starts-with") startsWith : number = 0;
  @Input("data-ride") dataRide : boolean = false;
  @Input("data-interval") dataInterval : boolean = false;
  @Input("disable-controls") disableControls : boolean = false;

  @ViewChild("items") items: ElementRef;
  @ViewChild("nextInput") private nextInput: ElementRef;
  @ViewChild("previousInput") private previousInput: ElementRef;

  private _contents : ElementRef[] = [];

  constructor() {
    
  }

  get contents(): ElementRef[] {
    return this._contents;
  }

  ngOnInit() {

  }

  ngAfterContentInit(): void {
    const toRemove = [];
    for(let i = 0; i < this.items.nativeElement.childNodes.length; i ++) {
      if(this.items.nativeElement.childNodes[i].childNodes.length > 0) {
        this._contents.push(this.items.nativeElement.childNodes[i]);
      }
      else {
        toRemove.push(this.items.nativeElement.childNodes[i]);
      }
    }

    for(let i = 0; i < toRemove.length; i ++) {
      if(toRemove[i].childNodes.length == 0) {
        this.items.nativeElement.removeChild(toRemove[i]);
      }
    }
  }

  next =() => {
    this.nextInput.nativeElement.click();
  }

  back =() => {
    this.previousInput.nativeElement.click();
  }

  fireNext() {
    this.nextClicked.emit();
  }

  fireBack() {
    this.previousClicked.emit();
  }

}
