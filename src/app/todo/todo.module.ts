import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { TodoPage } from './todo.page';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from './../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: TodoPage
  }
];


@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [TodoPage]
})
export class TodoPageModule {}
