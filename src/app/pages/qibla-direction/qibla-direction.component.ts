// qibla-direction.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qibla-direction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Qibla Direction</h1>
    <p>Find the direction of Qibla from your location.</p>
  `,
  styles: []
})
export class QiblaDirectionComponent {}
