import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing';
import { ExperienceDetailComponent } from './components/experience/experience-detail';
import { ReferencesComponent } from './components/references/references';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'experience', redirectTo: '', pathMatch: 'full' },
  { path: 'experience/:id', component: ExperienceDetailComponent },
  { path: 'references/:id', component: ReferencesComponent },
  { path: 'cv', redirectTo: '', pathMatch: 'full' },
  { path: 'projets', redirectTo: '', pathMatch: 'full' },
  { path: 'contacts', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
