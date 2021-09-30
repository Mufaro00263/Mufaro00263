import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { DiscoverLayoutComponent } from './layout/discover-layout.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { PrimarySideBarComponent } from './side-bars/primary-side-bar.component';
import { RightSideBarComponent } from './side-bars/right-side-bar.component';
import { SecondarySideBarComponent } from './side-bars/secondary-side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { DiscoverSideBarComponent } from './side-bars/discover-side-bar.component';
import { AllFriendsPageComponent } from './pages/all-friends-page.component';
import { PendingFriendsPageComponent } from './pages/pending-friends-page.component';
import { AllFriendsLayoutComponent } from './layout/all-friends-layout.component';
import { BlockedFriendsLayoutComponent } from './layout/blocked-friends-layout.component';
import { AddFriendLayoutComponent } from './layout/add-friend-layout.component';
import { CommunityComponent } from './header/body/community.component';
import { DiscoverHomePageComponent } from './pages/discover-home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    PrimarySideBarComponent,
    SecondarySideBarComponent,
    RightSideBarComponent,
    LayoutMainComponent,
    DiscoverLayoutComponent,
    DiscoverSideBarComponent,
    AllFriendsPageComponent,
    PendingFriendsPageComponent,
    AllFriendsLayoutComponent,
    BlockedFriendsLayoutComponent,
    AddFriendLayoutComponent,
    CommunityComponent,
    DiscoverHomePageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
