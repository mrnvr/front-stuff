import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromMemberActions from '../actions/member.actions';
import { ApiService } from '../../services';
import { Member } from '../../models';

@Injectable()
export class MemberEffects {
  @Effect()
  loadMembers$: Observable<fromMemberActions.LoadMembersSuccess | fromMemberActions.LoadMembersFail> = this.actions$
    .pipe(
      ofType(fromMemberActions.MemberActionsTypes.LoadMembers),
      switchMap(() => this.api.getPeople()
        .pipe(
          map((people: Member[]) => new fromMemberActions.LoadMembersSuccess(people)),
          catchError((err: any) => of(new fromMemberActions.LoadMembersFail(err)))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private api: ApiService
  ) {}
}
