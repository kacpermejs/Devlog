import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavButtonComponent } from './components/navigation-menu/nav-button/nav-button.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    NavButtonComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
