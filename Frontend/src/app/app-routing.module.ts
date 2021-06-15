import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarComponent } from "./components/car/car.component"
import { PendingComponent } from './components/pending/pending.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AddcarsComponent } from './components/addcars/addcars.component';
import { BikeComponent } from './components/bike/bike.component';
import { VanComponent } from './components/van/van.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'reservation',
    component: ReservationComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'car',
    component: CarComponent,
  },
  {
    path: 'pending',
    component: PendingComponent,
  },
  {
    path: 'addcars',
    component: AddcarsComponent,
  },
  {
    path: 'bike',
    component: BikeComponent,
  },
  {
    path: 'van',
    component: VanComponent,
  },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
