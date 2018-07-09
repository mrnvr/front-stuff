import { Component, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs/internal/Observable';

import { Post } from '../../models';
import { AddPost, LoadPosts } from '../../ngxs/post/post.actions';
import { PostState } from '../../ngxs/post/post.state';

@Component({
  selector: 'app-page-home',
  templateUrl: './home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  @Select(PostState.getPosts) public posts$: Observable<Post[]>;
  @Select(PostState.getErrorMessage) private errorMessage$: Observable<string>;
  @Select(PostState.getLastId) private lastId$: Observable<number>;

  public body: string;
  public id: number;
  public title: string;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadPosts());
    this.errorMessage$.subscribe(msg => console.log('Error: ', msg));
    this.body = '';
    this.title = '';
  }

  onSubmit() {
    this.lastId$.subscribe((returnID) => this.id = returnID + 1);
    const payload: Post = {
      id: this.id,
      title: this.title,
      body: this.body,
    };
    this.store.dispatch(new AddPost(payload)).subscribe(() => this.resetCred());
  }

  resetCred(): void {
    this.title = '';
    this.body = '';
  }
}
