import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Member } from '../../models';
import * as fromStore from '../../root-store';

@Component({
  selector: 'app-shared',
  templateUrl: './shared-state.page.html',
  styleUrls: ['./shared-state.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedStatePage implements OnInit {
  public members$: Observable<Member[]>;
  @Input() public name: string;
  @Input() public roles: string[];

  constructor(
    private store: Store<fromStore.MemberStoreState.State>,
    private cd: ChangeDetectorRef
  ) {
    this.members$ = this.store.select(fromStore.MemberStoreSelectors.selectMembers);
    cd.markForCheck();
  }

  ngOnInit() {
    this.cd.markForCheck();
    this.name = '';
    this.roles = [];
  }
}
