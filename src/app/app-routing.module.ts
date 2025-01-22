import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SportsComponent } from './sports/sports.component';
import { EventsComponent } from './events/events.component';
import { CartComponent } from './cart/cart.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'seats', component: SeatSelectionComponent },
  {path: 'dialog', component: DialogboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }