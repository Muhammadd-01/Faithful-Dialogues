// quran.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quran',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Quran Section</h1>
    <p>Read and explore the Quran with translations.</p>
  `,
  styles: []
})
export class QuranComponent {}
