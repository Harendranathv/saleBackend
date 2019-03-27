import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppBootstrapModule} from 'src/app/app-boostrap.module';
import {ProductItemComponent} from 'src/app/product-item/product-item.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductItemListComponent} from 'src/app/product-item-list/product-item-list.component';
import {ProductItemDetailComponent} from 'src/app/product-item-detail/product-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductItemListComponent,
    ProductItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
