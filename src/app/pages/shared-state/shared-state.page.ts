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

  constructor(
    private store: Store<fromStore.PostStoreState.State>,
    private cd: ChangeDetectorRef
  ) {
    this.posts$ = this.store.select(fromStore.PostStoreSelector.selectPosts);
    cd.markForCheck();
  }

  ngOnInit() {
    this.cd.markForCheck();
  }
}
