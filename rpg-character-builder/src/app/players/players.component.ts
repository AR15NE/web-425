import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Character {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PlayersComponent {
  characters: Character[] = [
    { name: 'Aria Moonshadow', gender: 'Female', class: 'Rogue', faction: 'The Silent Blades', startingLocation: 'Shadowfen', funFact: 'Aria can pick any lock in under 10 seconds.' },
    { name: 'Borin Stonefist', gender: 'Male', class: 'Warrior', faction: 'The Iron Brotherhood', startingLocation: 'Stonekeep', funFact: 'Borin once wrestled a bear and won.' },
    { name: 'Elara Starfire', gender: 'Female', class: 'Mage', faction: 'The Arcane Order', startingLocation: 'Starfall Tower', funFact: 'Elara can speak to animals.' },
    { name: 'Darius Blackthorn', gender: 'Male', class: 'Warlock', faction: 'The Dark Covenant', startingLocation: 'Blackthorn Manor', funFact: 'Darius made a pact with a shadow demon.' },
    { name: 'Lyra Windrider', gender: 'Female', class: 'Ranger', faction: 'The Wild Hunt', startingLocation: 'Greenwood Forest', funFact: 'Lyra can communicate with the wind.' },
    { name: 'Thorin Oakenshield', gender: 'Male', class: 'Paladin', faction: 'The Silver Hand', startingLocation: 'Silverkeep', funFact: 'Thorin has a shield blessed by a deity.' },
    { name: 'Mira Nightshade', gender: 'Female', class: 'Assassin', faction: 'The Shadow Guild', startingLocation: 'Nightshade Hollow', funFact: 'Mira can blend into any shadow.' },
    { name: 'Galen Brightspark', gender: 'Male', class: 'Sorcerer', faction: 'The Elemental Circle', startingLocation: 'Brightspark Tower', funFact: 'Galen can control fire with his mind.' },
    { name: 'Seraphina Lightbringer', gender: 'Female', class: 'Cleric', faction: 'The Holy Order', startingLocation: 'Lightbringer Abbey', funFact: 'Seraphina can heal wounds with a touch.' },
    { name: 'Ragnar Stormbreaker', gender: 'Male', class: 'Barbarian', faction: 'The Storm Clan', startingLocation: 'Stormbreaker Hold', funFact: 'Ragnar can summon lightning during a rage.' }
  ];
}


