import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { SeachProductComponent } from './container/seach-product/seach-product.component';
import { ListProductComponent } from './container/list-product/list-product.component';
import { HeadTopComponent } from './header/head-top/head-top.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './container/list-product/product/product.component';
import { ProductTopComponent } from './container/list-product/product-top/product-top.component';
import { SelectedProductListComponent } from './container/selected-product-list/selected-product-list.component';



@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    SeachProductComponent,
    ListProductComponent,
    HeadTopComponent,
    ProductComponent,
    ProductTopComponent,
    SelectedProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    ContainerComponent
  ]
})
export class EcomModule { }
