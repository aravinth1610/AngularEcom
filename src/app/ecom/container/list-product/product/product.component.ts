import { Component, Input } from '@angular/core';
import { ProductClass } from './../../../../data-object/ProductClass'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  @Input()
  product:ProductClass;

  //This is Object of Product
  // product:{
  //   id: number,
  //   title:string,
  //   description: string,
  //   price: number,
  //   discountPercentage?: number,
  //   rating: number,
  //   stock: number,
  //   brand: string,
  //   category: string,
  //   thumbnail: string,
  //   images: string,
  //   avaliable:boolean 
  // };
//  product={};
  

}


class productclass{
 
}