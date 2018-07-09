import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Post } from '../../models';
import { PostStoreSelector, PostStoreActions, RootStoreState } from '../../root-store';

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
    private store: Store<RootStoreState.RootState>,
    private cd: ChangeDetectorRef,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.posts$ = store.pipe(select(PostStoreSelector.selectPosts));
    cd.markForCheck();
  }

  ngOnInit() {
    this.store.dispatch(new PostStoreActions.LoadPosts());
    this.id = -1;
    this.title = '';
    this.body = '';
    this.userId = null;
  }

  onSubmit() {
    this.store.pipe(select(PostStoreSelector.selectPostsLastId))
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

  async displayAction(id: number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Action Sheet',
      buttons: [
        {
          text: 'Delete Post',
          handler: () => this.deletePost(id)
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  deletePost(id: number) {
    console.log(id);
    this.store.dispatch(new PostStoreActions.DeletePost(id));
  }
}
