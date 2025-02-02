// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConflictArchiveComponent } from './pages/conflict-archive/conflict-archive.component';
import { ResolutionStrategiesComponent } from './pages/resolution-strategies/resolution-strategies.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DuaComponent } from './pages/dua/dua.component';
import { QuranComponent } from './pages/quran/quran.component';
import { HadithComponent } from './pages/hadith/hadith.component';
import { IslamicCalendarComponent } from './pages/islamic-calendar/islamic-calendar.component';
import { QiblaDirectionComponent } from './pages/qibla-direction/qibla-direction.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Faithful Dialogues - Home' },
  { path: 'conflict-archive', component: ConflictArchiveComponent, title: 'Conflict Archive' },
  { path: 'resolution-strategies', component: ResolutionStrategiesComponent, title: 'Resolution Strategies' },
  { path: 'about', component: AboutComponent, title: 'About Us' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us' },
  { path: 'dua', component: DuaComponent, title: 'Dua Section' },
  { path: 'quran', component: QuranComponent, title: 'Quran Section' },
  { path: 'hadith', component: HadithComponent, title: 'Hadith Section' },
  { path: 'islamic-calendar', component: IslamicCalendarComponent, title: 'Islamic Calendar' },
  { path: 'qibla-direction', component: QiblaDirectionComponent, title: 'Qibla Direction' },
  { path: '**', redirectTo: '' } // Redirect to home for unknown routes
];
