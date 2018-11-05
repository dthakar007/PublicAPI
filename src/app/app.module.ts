import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { SideNavComponent } from './side-nav/side-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlockedPageComponent } from './blockedpage/blockedpage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageGridComponent } from './home-page/home-page-grid/home-page-grid.component';

@NgModule({
  declarations: [
    AppComponent, SideNavComponent, PageNotFoundComponent, BlockedPageComponent,
    HomePageComponent, HomePageGridComponent
  ],
  entryComponents: [
    HomePageComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, HttpModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  exports: [
    FormsModule, ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
