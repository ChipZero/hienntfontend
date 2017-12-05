import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProtypeComponent} from './protype/protype.component';
import {AdminComponent} from './admin.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'product', component: ProductComponent},
      {path: 'protype', component: ProtypeComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
