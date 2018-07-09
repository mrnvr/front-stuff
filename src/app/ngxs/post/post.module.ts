import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { PostState } from './post.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([PostState])
  ],
  declarations: []
})
export class PostModule { }
