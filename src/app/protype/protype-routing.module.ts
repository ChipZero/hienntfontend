import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProtypeComponent} from './protype.component';
import {DetailProtypeComponent} from './detail-protype/detail-protype.component';

const protypeRoutes: Routes = [
  {path: 'protype', redirectTo: 'superprotypes'},
  {path: 'prt/:id', redirectTo: '/superprt/:id'},
  {path: 'superprotypes', component: ProtypeComponent},
  {path: 'superprt/:id', component: DetailProtypeComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(protypeRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProtypeRoutingModule { }
