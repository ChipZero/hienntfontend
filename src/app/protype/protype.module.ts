import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProtypeComponent } from './detail-protype/detail-protype.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProtypeRoutingModule} from './protype-routing.module';
import {ProtypeService} from './protype.service';

@NgModule({
  imports: [
    CommonModule,
    ProtypeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetailProtypeComponent],
  providers: [ProtypeService]
})
export class ProtypeModule { }
