import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ListProductComponent } from '../list-product/list-product.component';
import { ProductClass } from 'src/app/data-object/ProductClass';

@Component({
  selector: 'selected-product-list',
  templateUrl: './selected-product-list.component.html',
  styleUrls: ['./selected-product-list.component.css']
})
export class SelectedProductListComponent implements OnInit  {
 
  @Input()
  selectedProductValue : ListProductComponent;

 product:ProductClass;
    
 ngOnInit(): void {
  this.product = this.selectedProductValue.selectedProduct;
}

}
