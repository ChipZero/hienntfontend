import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {IndexComponent} from './index/index.component';
import {SingleComponent} from './single/single.component';
import {AllproductComponent} from './allproduct/allproduct.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ClassicblogComponent} from './classicblog/classicblog.component';
import {GridblogComponent} from './gridblog/gridblog.component';
import {MasonryblogComponent} from './masonryblog/masonryblog.component';
import {ModernblogComponent} from './modernblog/modernblog.component';
import {PostblogComponent} from './postblog/postblog.component';

const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {path: 'index', component: IndexComponent},
      {path: 'single/:id', component: SingleComponent},
      {path: 'allproduct', component: AllproductComponent},
      {path: 'aboutus', component: AboutusComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'classicblog', component: ClassicblogComponent},
      {path: 'gridblog', component: GridblogComponent},
      {path: 'masonryblog', component: MasonryblogComponent},
      {path: 'modernblog', component: ModernblogComponent},
      {path: 'postblog', component: PostblogComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UserRoutingModule { }
