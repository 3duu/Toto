import { Component, Output, Input, EventEmitter, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

declare const $;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterContentInit {
  
  @Output() nextClicked = new EventEmitter();
  @Output() previousClicked = new EventEmitter();
  @Output() endReached = new EventEmitter();

  @Input("starts-with") startsWith : number = 0;
  @Input("data-ride") dataRide : boolean = false;
  @Input("data-interval") dataInterval : boolean = false;
  @Input("disable-controls") disableControls : boolean = false;
  @Input("indicator-bottom") indicatorBottom : string = "";

  @ViewChild("items") items: ElementRef;
  @ViewChild("nextInput") private nextInput: ElementRef;
  @ViewChild("previousInput") private previousInput: ElementRef;
  @ViewChild("indicator") private indicator: ElementRef;
  @ViewChild("carouselExampleIndicators") private carouselExampleIndicators: ElementRef;

  private _contents = [];
  private _currentPage : number = 0;

  constructor(public element : ElementRef) {
    
  }

  get contents(): any[] {
    return this._contents;
  }

  private setCurrentPage =()=> {
    this._currentPage = $(this.carouselExampleIndicators.nativeElement).find('div.active').index() + 1;
  }

  get currentPage() : number {
    return this._currentPage;
  }

  ngAfterContentInit(): void {
    const toRemove = [];
    for(let i = 0; i < this.items.nativeElement.childNodes.length; i ++) {
      if(this.items.nativeElement.childNodes[i].childNodes.length > 0) {
        if(this.startsWith == i) {
          this.items.nativeElement.childNodes[i].classList.add("active");
        }
        this._contents.push(this.items.nativeElement.childNodes[i]);
      }
      else {
        toRemove.push(this.items.nativeElement.childNodes[i]);
      }
    }

    //Remove not used pages
    for(let i = 0; i < toRemove.length; i ++) {
      if(toRemove[i].childNodes.length == 0) {
        this.items.nativeElement.removeChild(toRemove[i]);
      }
    }

    $(this.carouselExampleIndicators.nativeElement).on('slid.bs.carousel', this.setCurrentPage);

    this.setCurrentPage();
  }

  next =() => {
    this.nextInput.nativeElement.click();
    this.fireNext();
  }

  back =() => {
    this.previousInput.nativeElement.click();
    this.fireBack();
  }

  fireNext() {
    this.nextClicked.emit();
    this.setCurrentPage();
  }

  fireBack() {
    this.previousClicked.emit();
    this.setCurrentPage();
  }

}
