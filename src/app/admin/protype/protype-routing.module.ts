import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProtypeComponent} from './protype.component';
import {DetailProtypeComponent} from './detail-protype/detail-protype.component';
import {AdminComponent} from '../admin.component';

const protypeRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'protype',
        component: ProtypeComponent,
        children: [
          {path: 'superprt/:id', component: DetailProtypeComponent}
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(protypeRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProtypeRoutingModule { }
