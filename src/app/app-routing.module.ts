import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { TefilosComponent } from './tefilos/tefilos.component';
import { ByNameComponent } from './search/by-name/by-name.component';
import { ByLocationComponent } from './search/by-location/by-location.component';
import { ByYearComponent } from './search/by-year/by-year.component';
import { ByOccupationComponent } from './search/by-occupation/by-occupation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'search', component: SearchComponent, children: [
      { path: 'name', component: ByNameComponent },
      { path: 'year', component: ByYearComponent},
      { path: 'location', component: ByLocationComponent },
      { path: 'occupation', component:ByOccupationComponent },
    ]
  },

  { path: 'broadcast', component: BroadcastComponent },
  { path: 'tefilos', component: TefilosComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
