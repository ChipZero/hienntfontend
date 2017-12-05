import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ProductService } from './allservice/product/product.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {Ng2PaginationModule} from 'ng2-pagination';
import {ProtypeService} from './allservice/protype/protype.service';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {AdminModule} from './admin/admin.module';
import {UserModule} from './user/user.module';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    Ng2PaginationModule
  ],
  providers: [ProductService, ProtypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
