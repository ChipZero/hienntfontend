import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {IndexComponent} from './index/index.component';

const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {path: 'index', component: IndexComponent}
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
