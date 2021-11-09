import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { UserInfoComponent } from './layout/user-info.component';
import { CommunityCardComponent } from './header/body/community-card.component';
import { FirebaseCardComponent } from './header/body/firebase-card.component';
import { UserProfileComponent } from './header/body/user-profile.component';
import { UserInfoService } from './layout/user-info.service';
import { UserProfileService } from './header/body/user-profile.service';
import { EditUserInfoComponent } from './header/body/edit-user-profile.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginPageComponent } from './pages/login-page.component';


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
    DiscoverHomePageComponent,
    UserInfoComponent,
    CommunityCardComponent,
    FirebaseCardComponent,
    UserProfileComponent,
    UserProfileComponent,
    EditUserInfoComponent,
    LoginPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'spotify-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
