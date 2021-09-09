import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { PrimarySideBarComponent } from './side-bars/primary-side-bar.component';
import { RightSideBarComponent } from './side-bars/right-side-bar.component';
import { SecondarySideBarComponent } from './side-bars/secondary-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    PrimarySideBarComponent,
    SecondarySideBarComponent,
    RightSideBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
