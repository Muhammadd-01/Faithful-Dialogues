// conflict-archive.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conflict-archive',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Conflict Archive</h1>
    <p>Explore documented conflicts between Islamic sects.</p>
  `,
  styles: []
})
export class ConflictArchiveComponent {}
