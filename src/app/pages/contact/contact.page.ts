import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Member } from '../../models';
import * as fromStore from '../../store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPage implements OnInit {
  public members$: Observable<Member[]>;
  @Input() public name: string;
  @Input() public roles: string[];

  constructor(
    private store: Store<fromStore.AppState>,
  ) {
    this.members$ = this.store.select(fromStore.getMembers);
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadMembers());
    this.name = '';
    this.roles = [];
  }

  addMember(): void {
    if (this.name !== '' && this.roles.length > 0) {
      this.store.dispatch(new fromStore.AddMember({name: this.name, company: {bs: this.roles}}));
      this.resetCred();
    }
  }

  resetCred(): void {
    this.name = '';
    this.roles = [];
  }
}
