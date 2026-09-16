import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface ReferenceProject {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  context: string;
  features: string[];
  technologies: string[];
  liveLink?: string;
  demoCredentials?: string;
  githubLink?: string;
}

interface ServiceReferences {
  id: string;
  serviceTitle: string;
  intro: string;
  projects: ReferenceProject[];
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './references.html',
  styleUrl: './references.css',
})
export class ReferencesComponent implements OnInit {
  serviceRefs: ServiceReferences | undefined;

  private readonly catalog: ServiceReferences[] = [
    {
      id: 'application-web-metier',
      serviceTitle: 'Application web métier',
      intro:
        'Exemples de réalisations full-stack livrées de bout en bout (API, interface, auth, mise en ligne).',
      projects: [
        {
          id: 'cinema',
          title: 'Plateforme de gestion de cinémas',
          subtitle: 'Référence full-stack — Angular / Spring Boot',
          summary:
            'Application web complète pour cinémas indépendants : consultation des films, réservation en ligne et gestion des séances.',
          context:
            'Projet personnel de démonstration d’une stack métier type client : frontend Angular, API Spring Boot, PostgreSQL, sécurisation OAuth2 / Keycloak, déploiement Docker + Nginx.',
          features: [
            'Authentification OAuth2 sécurisée avec Keycloak',
            'Réservation en ligne et gestion des films / séances',
            'Architecture orientée services, données de démonstration',
            'Mise en ligne sur VPS (Docker, Nginx)',
          ],
          technologies: [
            'Angular',
            'TypeScript',
            'Spring Boot',
            'Java 17',
            'PostgreSQL',
            'Keycloak',
            'OAuth2',
            'Docker',
            'Nginx',
          ],
          liveLink: 'http://cinema.alikhlifi.ovh',
          demoCredentials: 'test@example.com / Test123!',
          githubLink: 'https://gitlab.com/akhlifi-group',
        },
      ],
    },
    {
      id: 'tma',
      serviceTitle: 'TMA — Tierce Maintenance Applicative',
      intro: 'Références de missions TMA (incidents, évolutions, support production).',
      projects: [],
    },
    {
      id: 'devops',
      serviceTitle: 'DevOps',
      intro: 'Références de mises en production et d’infrastructures livrées.',
      projects: [],
    },
  ];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.serviceRefs = this.catalog.find((item) => item.id === id);
  }

  constructor(private route: ActivatedRoute) {}
}
