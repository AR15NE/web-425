import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Defines the routes for the application
export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route that maps to HomeComponent
  { path: 'home', component: HomeComponent } // Route for 'home' path, also maps to HomeComponent
];

