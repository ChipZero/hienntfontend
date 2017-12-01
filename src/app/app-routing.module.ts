import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ProductComponent } from './product/product.component';
import {ProtypeComponent} from './protype/protype.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent},
  { path: 'invoice', component: InvoicesComponent},
  { path: 'product', component: ProductComponent},
  { path: 'protype', component: ProtypeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
