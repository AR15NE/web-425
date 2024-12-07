import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guild-list',
  templateUrl: './guild-list.component.html',
  styleUrls: ['./guild-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GuildListComponent {
  @Input() guilds: any[] = []; // Input property to receive the list of guilds
}


