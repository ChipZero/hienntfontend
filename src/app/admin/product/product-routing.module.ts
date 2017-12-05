import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { DetailProductComponent} from './detail-product/detail-product.component';
import {AdminComponent} from '../admin.component';

const productRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent,
        children: [
          { path: 'superpro/:id', component: DetailProductComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
