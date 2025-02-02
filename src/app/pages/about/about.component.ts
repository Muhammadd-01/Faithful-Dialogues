// about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>About Us</h1>
    <p>Learn about our mission, vision, and credibility.</p>
  `,
  styles: []
})
export class AboutComponent {}
