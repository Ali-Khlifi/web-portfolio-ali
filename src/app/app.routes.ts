import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ExperienceComponent } from './components/experience/experience';
import { ExperienceDetailComponent } from './components/experience/experience-detail';
import { ProjectsComponent } from './components/projects/projects';
import { MessagesComponent } from './components/messages/messages';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'experience', component: ExperienceComponent },
  { path: 'experience/:id', component: ExperienceDetailComponent },
  { path: 'cv', redirectTo: '/experience', pathMatch: 'full' },
  { path: 'projets', component: ProjectsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '**', redirectTo: '/home' }
];
