import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs/index';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import * as fromPostActions from './post.actions';
import { ApiService } from '../../services';
import { Post } from '../../models';

@Injectable()
export class PostEffects {

  @Effect()
  loadPosts$: Observable<fromPostActions.LoadPostsSuccess | fromPostActions.LoadPostsFail> = this.actions$
    .pipe(
      ofType(fromPostActions.PostActionTypes.LoadPosts),
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
          map((post: Post) => new fromPostActions.AddPostSuccess(post)),
          catchError((err: any) => of(new fromPostActions.AddPostFail(err)))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private api: ApiService
  ) {}
}
