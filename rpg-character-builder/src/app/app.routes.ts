import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

// Define the routes for the application
export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route, redirects to HomeComponent
  { path: 'home', component: HomeComponent }, // Route for the Home page
  { path: 'players', component: PlayersComponent }, // Route for the Players page
  { path: 'signin', component: SigninComponent }, // Route for the Sign In page
  { path: 'create-character', component: CreateCharacterComponent }, // Route for the Create Character page
  { path: 'create-guild', component: CreateGuildComponent }, // Route for the Create Guild page
  { path: 'character-faction', component: CharacterFactionComponent }, // Route for the Character Faction page
  { path: 'about', component: AboutComponent }, // Route for the About page
  { path: 'gallery', component: GalleryComponent } // Route for the Gallery page
];
