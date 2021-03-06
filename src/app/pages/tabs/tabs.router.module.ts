import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { SettingsPage } from '../settings/settings.page';
import { SharedStatePage } from '../shared-state/shared-state.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home', outlet: 'home', component: HomePage },
      { path: 'about', outlet: 'about', component: AboutPage },
      { path: 'contact', outlet: 'contact', component: ContactPage },
      { path: 'settings', outlet: 'settings', component: SettingsPage },
      { path: 'shared', outlet: 'shared', component: SharedStatePage }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(shared:shared)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
