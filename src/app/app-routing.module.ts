import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverLayoutComponent } from './layout/discover-layout.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { AllFriendsLayoutComponent } from './layout/all-friends-layout.component';
import { PendingFriendsLayoutComponent } from './layout/pending-friends-layout.component';
import { BlockedFriendsLayoutComponent } from './layout/blocked-friends-layout.component';
import { AddFriendLayoutComponent } from './layout/add-friend-layout.component';

const routes: Routes = [

  {path: 'guild-disovery', component: DiscoverLayoutComponent},
  {path: 'all-friends', component: AllFriendsLayoutComponent},
  {path: 'pending-friends', component: PendingFriendsLayoutComponent},
  {path: 'blocked-friends', component: BlockedFriendsLayoutComponent},
  {path: 'add-friend', component: AddFriendLayoutComponent},
]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
   
  ],

  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
