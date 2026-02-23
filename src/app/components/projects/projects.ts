import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  technologies: string[];
  skills: string[];
  liveLink?: string;
  githubLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 'cinema-management',
      title: 'Plateforme de Gestion de Cinémas',
      shortDescription: 'Application web full-stack de gestion de cinémas avec réservation en ligne et authentification sécurisée.',
      description: `Système complet de gestion de cinémas incluant réservation en ligne, gestion des films, gestion des séances et authentification sécurisée. Plateforme scalable avec architecture microservices et déploiement en production.`,
      imageUrl: 'assets/img/cinema.jpg',
      technologies: ['Angular', 'TypeScript', 'Spring Boot', 'Java 17', 'PostgreSQL', 'Keycloak', 'OAuth2', 'Docker', 'Nginx'],
      skills: ['Architecture microservices', 'DevOps (Docker, VPS)', 'Sécurité (OAuth2, JWT)', 'Gestion Git multi-dépôts'],
      liveLink: 'http://cinema.alikhlifi.ovh',
      githubLink: 'https://gitlab.com/akhlifi-group'
    }
  ];
}
