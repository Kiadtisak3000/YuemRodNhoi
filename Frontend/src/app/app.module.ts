import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SigninComponent } from './components/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularWebStorageModule } from 'angular-web-storage';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { BikeComponent } from './components/bike/bike.component';
import { CarComponent } from './components/car/car.component';
import { VanComponent } from './components/van/van.component';
import { PendingComponent } from './components/pending/pending.component';
import { ReservationComponent } from './components/reservation/reservation.component';

@NgModule({
  declarations: [AppComponent, SigninComponent, HomepageComponent, SignupComponent, NavbarComponent, UsersComponent, BikeComponent, CarComponent, VanComponent, PendingComponent, ReservationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularWebStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
