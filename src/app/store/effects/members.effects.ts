import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as actions from '../actions';
import { DataService } from '../../services';

@Injectable()
export class MembersEffects {
  @Effect()
  loadMembers$: Observable<actions.LoadMembersSuccess | actions.LoadMembersFail> = this.actions$
    .pipe(
      ofType(actions.LOAD_MEMBERS),
      switchMap(() => this.data.getPeople()
        .pipe(
          map(people => new actions.LoadMembersSuccess(people)),
          catchError((err: any) => of(new actions.LoadMembersFail(err)))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private data: DataService
  ) {}
}
