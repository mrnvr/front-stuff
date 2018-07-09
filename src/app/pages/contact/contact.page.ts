import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../../models';
import * as fromStore from '../../root-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPage implements OnInit {
  public members$: Observable<Member[]>;
  public name: string;
  public roles: string[];

  constructor(
    private store: Store<fromStore.MemberStoreState.State>,
    private cd: ChangeDetectorRef
  ) {
    this.members$ = this.store.select(fromStore.MemberStoreSelectors.selectMembers);
    cd.markForCheck();
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.MemberStoreActions.LoadMembers());
    this.name = '';
    this.roles = [];
  }

  addMember(): void {
    const name: string = this.name;
    const roles: string[] = this.roles;
    if (name !== '' && roles.length > 0) {
      this.store.dispatch(new fromStore.MemberStoreActions.AddMember({name: name, company: {bs: roles}}));
      this.resetCred();
    }
  }

  resetCred(): void {
    this.name = '';
    this.roles = [];
  }
}
