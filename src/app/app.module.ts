import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { TefilosComponent } from './tefilos/tefilos.component';
import { ByNameComponent } from './search/by-name/by-name.component';
import { ByYearComponent } from './search/by-year/by-year.component';
import { ByLocationComponent } from './search/by-location/by-location.component';
import { ByOccupationComponent } from './search/by-occupation/by-occupation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    BroadcastComponent,
    TefilosComponent,
    ByNameComponent,
    ByYearComponent,
    ByLocationComponent,
    ByOccupationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
