import { Actions, Effect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { exhaustMap, takeUntil, tap } from 'rxjs/operators';
import { Observable, defer, of } from 'rxjs';

@Injectable()
export class TestEffect implements OnRunEffects {
  constructor(private actions$: Actions) {}

  @Effect({dispatch: false})
  init1$: Observable<any> = defer(() => of(null)).pipe(
    tap(() => console.log('init'))
  );
/*
  @Effect()
  authAction$ = this.actions$.pipe(
    ofType<SomeAction>('actionName'),
    tap(action => console.log(action))
  );
*/
  @Effect({dispatch: false})
  logActions = this.actions$.pipe(
    tap(action => console.log(action))
  );
/*
  // Effect triggering actions have to be at the end
  @Effect()
  init2$: Observable<action> = defer(() => {
    return of(new SomeAction());
  });
*/
  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>) {
    return this.actions$.pipe(
      ofType('LOGGED_IN'),
      exhaustMap(
        () => resolvedEffects$.pipe(
          takeUntil(this.actions$.pipe(ofType('LOGGED_OUT')))
        )
      )
    );
  }
}
