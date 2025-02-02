// dua.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dua',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Dua Section</h1>
    <p>Explore supplications for various occasions.</p>
  `,
  styles: []
})
export class DuaComponent {}
