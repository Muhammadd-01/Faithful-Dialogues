// home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Welcome to Faithful Dialogues</h1>
    <p>This is the home page.</p>
  `,
  styles: []
})
export class HomeComponent {}
