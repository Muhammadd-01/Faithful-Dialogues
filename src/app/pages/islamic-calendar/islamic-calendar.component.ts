// islamic-calendar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-islamic-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Islamic Calendar</h1>
    <p>View the Hijri calendar and important dates.</p>
  `,
  styles: []
})
export class IslamicCalendarComponent {}
