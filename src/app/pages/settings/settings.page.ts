import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models';
import { PostStoreState, PostStoreSelector, PostStoreActions } from '../../root-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  private id: number;
  public title: string;
  public body: string;
  public userId: number;
  public posts$: Observable<Post[]>;

  constructor(
    // private store: Store<RootStoreState.RootState>,
    private store: Store<PostStoreState.State>,
    private cd: ChangeDetectorRef,
  ) {
    this.posts$ = store.select(PostStoreSelector.selectPosts);
    this.cd.markForCheck();
  }

  ngOnInit() {
    this.store.dispatch(new PostStoreActions.LoadPosts());
    this.id = -1;
    this.title = '';
    this.body = '';
    this.userId = null;
  }

  async onSubmit() {
    await this.store.select(PostStoreSelector.selectPostsLastId)
      .subscribe((id: number) => this.id = id + 1);
    const payload: Post = {
      id: this.id,
      title: this.title,
      body: this.body,
      userId: this.userId,
    };
    this.store.dispatch(new PostStoreActions.AddPost(payload));
    this.resetCred();
  }

  resetCred(): void {
    this.title = '';
    this.body = '';
    this.userId = null;
  }
}
