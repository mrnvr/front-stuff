import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { LoadMembersFail, LoadMembersSuccess, MemberActionTypes } from './member.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../../services';
import { Observable, of } from 'rxjs/index';

@Injectable()
export class MemberEffects {

  @Effect()
  loadMembers$: Observable<LoadMembersSuccess | LoadMembersFail> = this.actions$
    .pipe(
      ofType(MemberActionTypes.LoadMembers),
      switchMap(() => this.api.getPeople()
        .pipe(
          map(people => new LoadMembersSuccess(people)),
          catchError((err: any) => of(new LoadMembersFail(err)))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private api: ApiService
  ) {}
}
