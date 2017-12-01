import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CustomerService } from './customer/customer.service';
import { InvoiceService } from './invoices/invoice.service';
import { ProductService } from './product/product.service';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerModule } from './customer/customer.module';
import {HeaderComponent} from './header/header';
import {ProductModule} from './product/product.module';
import { DetailsInvoiceComponent } from './invoices/details-invoice/details-invoice.component';
import {InvoiceModule} from './invoices/invoice.module';
import {Ng2PaginationModule} from 'ng2-pagination';
import { ProtypeComponent } from './protype/protype.component';
import {ProtypeModule} from './protype/protype.module';
import {ProtypeService} from './protype/protype.service';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    InvoicesComponent,
    ProductComponent,
    HeaderComponent,
    ProtypeComponent,
    AdminComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CustomerModule,
    ProductModule,
    InvoiceModule,
    ProtypeModule,
    Ng2PaginationModule
  ],
  providers: [CustomerService, InvoiceService, ProductService, ProtypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
