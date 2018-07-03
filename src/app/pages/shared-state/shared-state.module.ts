import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedStatePage } from './shared-state.page';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../components/components';

const routes: Routes = [
  {
    path: '',
    component: SharedStatePage
  }
];
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SharedStatePage]
})
export class SharedStatePageModule { }
