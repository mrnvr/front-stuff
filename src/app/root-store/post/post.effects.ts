import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs/index';
import { catchError, concatMap, map, mergeMap, startWith, switchMap } from 'rxjs/operators';

import * as fromPostActions from './post.actions';
import { ApiService } from '../../services';
import { Post } from '../../models';

@Injectable()
export class PostEffects {

  @Effect()
  loadPosts$: Observable<fromPostActions.LoadPostsSuccess | fromPostActions.LoadPostsFail> = this.actions$
    .pipe(
      ofType(fromPostActions.PostActionTypes.LoadPosts),
      // startWith(new fromPostActions.LoadPosts()), // dispatch this action on startup
      switchMap(() => this.api.getPosts()
        .pipe(
          map((posts: Post[]) => new fromPostActions.LoadPostsSuccess(posts)),
          catchError((err: any) => of(new fromPostActions.LoadPostsFail(err)))
        )
      )
    );

  @Effect()
  sendPost$: Observable<fromPostActions.AddPostSuccess | fromPostActions.AddPostFail> = this.actions$
    .pipe(
      ofType(fromPostActions.PostActionTypes.AddPost),
      mergeMap((action: fromPostActions.AddPost) => this.api.postComment(action.payload)
        .pipe(
          map(() => new fromPostActions.AddPostSuccess(action.payload)),
          catchError((err: any) => of(new fromPostActions.AddPostFail(err)))
        )
      )
    );

  @Effect()
  deletePost$: Observable<fromPostActions.DeletePostSuccess | fromPostActions.DeletePostFail> = this.actions$
    .pipe(
      ofType(fromPostActions.PostActionTypes.DeletePost),
      concatMap((action: fromPostActions.DeletePost) => this.api.deleteComment(action.payload)
        .pipe(
          map(() => new fromPostActions.DeletePostSuccess(action.payload)),
          catchError((err: any) => of(new fromPostActions.DeletePostFail(err)))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private api: ApiService
  ) {}
}
