import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import { IndexComponent } from './index/index.component';
import {BannerComponent} from './index/banner/banner.component';
import {CaroselComponent} from './index/carosel/carosel.component';
import {CateComponent} from './index/cate/cate.component';
import {CheffComponent} from './index/cheff/cheff.component';
import {GgmapComponent} from './index/ggmap/ggmap.component';
import {ProductComponent} from './index/product/product.component';
import {ServiceesComponent} from './index/servicees/servicees.component';
import { SingleComponent } from './single/single.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ClassicblogComponent } from './classicblog/classicblog.component';
import { GridblogComponent } from './gridblog/gridblog.component';
import { MasonryblogComponent } from './masonryblog/masonryblog.component';
import { ModernblogComponent } from './modernblog/modernblog.component';
import { PostblogComponent } from './postblog/postblog.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PaginationModule,
    UserRoutingModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [
    IndexComponent,
    BannerComponent,
    CaroselComponent,
    CateComponent,
    CheffComponent,
    GgmapComponent,
    ProductComponent,
    ServiceesComponent,
    SingleComponent,
    AllproductComponent,
    AboutusComponent,
    ContactsComponent,
    ClassicblogComponent,
    GridblogComponent,
    MasonryblogComponent,
    ModernblogComponent,
    PostblogComponent
  ],
  bootstrap: [UserComponent]
})
export class UserModule { }
