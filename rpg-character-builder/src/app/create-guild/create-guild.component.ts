import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-guild',
  templateUrl: './create-guild.component.html',
  styleUrls: ['./create-guild.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class CreateGuildComponent {
  guildForm: FormGroup;
  guilds: Array<any> = [];
  isSubmitted = false; // Flag to track form submission

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
    this.isSubmitted = true; // Mark the form as submitted
    if (this.guildForm.valid) {
      this.guilds.push(this.guildForm.value);
      this.guildForm.reset();
      this.isSubmitted = false; // Reset the submission flag
    }
  }
}








