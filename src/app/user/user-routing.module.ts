import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {IndexComponent} from './index/index.component';
import {SingleComponent} from './single/single.component';
import {AllproductComponent} from './allproduct/allproduct.component';

const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {path: 'index', component: IndexComponent},
      {path: 'single/:id', component: SingleComponent},
      {path: 'allproduct', component: AllproductComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UserRoutingModule { }
