import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcomModule } from './ecom/ecom.module';
import { ContainerComponent } from './ecom/container/container.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EcomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
