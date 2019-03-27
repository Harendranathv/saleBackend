import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductItemComponent} from 'src/app/product-item/product-item.component';
import {ProductItemListComponent} from 'src/app/product-item-list/product-item-list.component';
import {ProductItemDetailComponent} from 'src/app/product-item-detail/product-item-detail.component';

const routes: Routes = [{
  path: '',
  component: ProductItemListComponent
},{
  path: 'detail/:id',
  component: ProductItemDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
