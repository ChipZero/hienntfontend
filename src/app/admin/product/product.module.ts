import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { ProductService} from '../../allservice/product/product.service';
import { DetailProductComponent  } from './detail-product/detail-product.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [DetailProductComponent],
  providers: [ ProductService ]
})
export class ProductModule { }
