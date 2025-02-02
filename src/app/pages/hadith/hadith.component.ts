// hadith.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hadith',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hadith Section</h1>
    <p>Explore Hadiths from various books.</p>
  `,
  styles: []
})
export class HadithComponent {}
