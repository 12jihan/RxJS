import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PromisesComponent } from './components/promises/promises.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ObservablesComponent } from './components/observables/observables.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomePageComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'promises', component: PromisesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
