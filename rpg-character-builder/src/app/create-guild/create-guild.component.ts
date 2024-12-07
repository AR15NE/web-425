import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GuildListComponent } from '../guild-list/guild-list.component'; // Ensure this import

@Component({
  selector: 'app-create-guild',
  templateUrl: './create-guild.component.html',
  styleUrls: ['./create-guild.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GuildListComponent] // Ensure GuildListComponent here
})
export class CreateGuildComponent {
  guildForm: FormGroup;
  guilds: Array<any> = [];
  @Output() guildCreated = new EventEmitter<any>();
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      notificationPreference: ['', Validators.required]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.guildForm.valid) {
      this.guilds.push(this.guildForm.value);
      this.guildCreated.emit(this.guildForm.value);
      this.guildForm.reset();
      this.isSubmitted = false;
    }
  }
}











