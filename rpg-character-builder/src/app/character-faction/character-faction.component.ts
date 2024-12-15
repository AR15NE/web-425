import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-faction',
  templateUrl: './character-faction.component.html',
  styleUrls: ['./character-faction.component.css']
})
export class CharacterFactionComponent implements OnInit {
  characterFactions: any[] = [];
  errorMessage: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getCharacterFactions();
  }

  getCharacterFactions(): void {
    fetch('http://localhost:3000/api/character-faction')  
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.characterFactions = data;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        this.errorMessage = 'Error fetching character factions. Please try again later.';
      });
  }
}
