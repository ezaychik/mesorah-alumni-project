import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BroadcastComponent } from './components/broadcast/broadcast.component';
import { TefilosComponent } from './components/tefilos/tefilos.component';
import { ByNameComponent } from './components/search/by-name/by-name.component';
import { ByYearComponent } from './components/search/by-year/by-year.component';
import { ByLocationComponent } from './components/search/by-location/by-location.component';
import { ByOccupationComponent } from './components/search/by-occupation/by-occupation.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ModalService } from './services/modal.service';
import { AlumnaService } from './services/alumna.service';
import { TefilosService } from './services/tefilos.service';
import { CommonDataService } from './services/common-data.service';
import { UniquePipe } from './pipes/unique.pipe';
import { NotNullPipe } from './pipes/not-null.pipe';
import { BroadcastService } from './services/broadcast.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    BroadcastComponent,
    TefilosComponent,
    ByNameComponent,
    ByYearComponent,
    ByLocationComponent,
    ByOccupationComponent,
    PhoneNumberPipe,
    LoginComponent,
    RegisterComponent,
    UniquePipe,
    NotNullPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [
    SearchService, AuthService, AuthGuardService, ModalService, AlumnaService, TefilosService, CommonDataService, BroadcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
