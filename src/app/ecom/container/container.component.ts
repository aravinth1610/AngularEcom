import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductClass } from 'src/app/data-object/ProductClass';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  
  searchVal:string;

  searchValue(event:any)
  {
    this.searchVal=event;
  }
 
  @ViewChild('selectProduct')  //viewChild is use to see the templated of parent ref values and their is viewChildern also
                               //contentChild is use to see the templated of parent ref to child compntent we can use (contentChild) in child compt and their is contentchilder also
  selectedProductValueComp : ListProductComponent;
  
  


}
