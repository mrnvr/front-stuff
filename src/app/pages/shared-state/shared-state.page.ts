import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../models';
import * as fromStore from '../../root-store';

@Component({
  selector: 'app-shared',
  templateUrl: './shared-state.page.html',
  styleUrls: ['./shared-state.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedStatePage implements OnInit {
  public posts$: Observable<Post[]>;
  readonly limit: number;
  private current: number;
  public toggleLoadMore: boolean;

  constructor(
    private store: Store<fromStore.PostStoreState.State>,
    private cd: ChangeDetectorRef,
  ) {
    this.limit = 0;
    this.current = 95;
    this.toggleLoadMore = false;
    this.posts$ = this.store.select(fromStore.PostStoreSelector.selectLastPosts(this.current));
    cd.markForCheck();
  }

  ngOnInit() {
    this.posts$.subscribe((posts) => {
      if (posts.length > 0) {
        this.toggleLoadMore = true;
      }
    });
    this.cd.markForCheck();
  }

  loadMore() {
    this.current -= 10;
    this.posts$ = this.store.select(fromStore.PostStoreSelector.selectLastPosts(this.current));
    if (this.limit >= this.current) {
      this.toggleLoadMore = false;
    }
  }
}
