import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {ProductComponent} from './product/product.component';
import {ProtypeComponent} from './protype/protype.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination';
import {AdminComponent} from './admin.component';
import {ProductModule} from './product/product.module';
import {ProtypeModule} from './protype/protype.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PaginationModule,
    ProductModule,
    ProtypeModule
  ],
  declarations: [
    ProductComponent,
    ProtypeComponent,
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
