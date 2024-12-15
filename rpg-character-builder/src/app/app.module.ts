import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';  // Ensure singular
import { AuthGuard } from './auth.guard';
import { routes } from './app.routes';

// Import standalone components
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterFactionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    PlayersComponent,  // Import instead of declare
    SigninComponent,   // Import instead of declare
    CreateCharacterComponent,  // Import instead of declare
    CreateGuildComponent,  // Import instead of declare
    AboutComponent,  // Import instead of declare
    GalleryComponent  // Import instead of declare
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
