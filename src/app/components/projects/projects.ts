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
      shortDescription: 'Application web full-stack complète de gestion de cinémas (v1.0.0) - Actuellement en phase de test avec données de démonstration. \nFonctionnalités: authentification OAuth2 sécurisée avec Keycloak, réservation en ligne et gestion des films/séances.\n🔐 Demo: test@example.com / Test123!',
      description: `Projet de développement d'une plateforme de gestion de cinémas, offrant une solution complète pour les cinémas indépendants. L'application permet aux utilisateurs de consulter les films à l'affiche, réserver des billets en ligne et gérer les séances. Le projet est développé avec Angular pour le frontend et Spring Boot pour le backend, avec une architecture microservices sécurisée par Keycloak et OAuth2. Actuellement en phase de test avec des données de démonstration, la plateforme vise à offrir une expérience utilisateur fluide et sécurisée pour les cinémas et leurs clients.`,
      imageUrl: 'assets/img/cinema.jpg',
      technologies: ['Angular', 'TypeScript', 'Spring Boot', 'Java 17', 'PostgreSQL', 'Keycloak', 'OAuth2', 'Docker', 'Nginx'],
      skills: ['Architecture microservices', 'DevOps (Docker, VPS)', 'Sécurité (OAuth2, JWT)', 'Gestion Git multi-dépôts'],
      liveLink: 'http://cinema.alikhlifi.ovh',
      githubLink: 'https://gitlab.com/akhlifi-group'
    }
  ];
}
