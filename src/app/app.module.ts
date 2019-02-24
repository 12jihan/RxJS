import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PromisesComponent } from './components/promises/promises.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ObservablesComponent } from './components/observables/observables.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    PromisesComponent,
    PageNotFoundComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
