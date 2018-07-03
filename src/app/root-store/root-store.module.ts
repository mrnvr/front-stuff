import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MemberModule } from './member';
import { PostModule } from './post';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([]),
    MemberModule,
    PostModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    })
  ],
  declarations: []
})
export class RootStoreModule { }
