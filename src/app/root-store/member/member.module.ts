import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './member.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MemberEffects } from './member.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([MemberEffects]),
    StoreModule.forFeature('member', reducer)
  ],
  declarations: []
})
export class MemberModule { }
