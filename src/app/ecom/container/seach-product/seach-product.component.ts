import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'seach-product',
  templateUrl: './seach-product.component.html',
  styleUrls: ['./seach-product.component.css']
})
export class SeachProductComponent {

  seachValue:string='';

  @Output()
  searchValEmit = new EventEmitter<string>();

  onsearchChange()
  {
    this.searchValEmit.emit(this.seachValue);
  }
  

}
