import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { BroadcastComponent } from './components/broadcast/broadcast.component';
import { TefilosComponent } from './components/tefilos/tefilos.component';
import { SearchComponent } from './components/search/search.component';
import { ByNameComponent } from './components/search/by-name/by-name.component';
import { ByYearComponent } from './components/search/by-year/by-year.component';
import { ByLocationComponent } from './components/search/by-location/by-location.component';
import { ByOccupationComponent } from './components/search/by-occupation/by-occupation.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:id', component: ProfileComponent },
  {
    path: 'search', component: SearchComponent, children: [
      { path: 'name', component: ByNameComponent },
      { path: 'year', component: ByYearComponent },
      { path: 'location', component: ByLocationComponent },
      { path: 'occupation', component: ByOccupationComponent },
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'broadcast', component: BroadcastComponent },
  { path: 'tefilos', component: TefilosComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
