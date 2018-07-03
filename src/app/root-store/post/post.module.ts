import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPost from './post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './post.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('post', fromPost.reducer),
    EffectsModule.forFeature([PostEffects]),
  ],
  declarations: [],
  providers: [PostEffects]
})
export class PostModule { }
