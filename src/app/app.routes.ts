import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ExperienceComponent } from './components/experience/experience';
import { BlogComponent } from './components/blog/blog';
import { ProjectsComponent } from './components/projects/projects';
import { MessagesComponent } from './components/messages/messages';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'experience', component: ExperienceComponent },
  { path: 'cv', redirectTo: '/experience', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  { path: 'projets', component: ProjectsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '**', redirectTo: '/home' }
];
