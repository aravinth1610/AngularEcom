import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product-top',
  templateUrl: './product-top.component.html',
  styleUrls: ['./product-top.component.css']
})
export class ProductTopComponent {

    @Input()
    all:number=0;

    @Input()
    stock:number=0;

    @Input()
    OutStock:number=0;

    selectRadio:string="all";

    @Output()
    filterOccures = new EventEmitter<string>();

  onChange()
  {
    console.log(this.selectRadio);
    
    this.filterOccures.emit(this.selectRadio);
  }



}
