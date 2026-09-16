import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ServiceOffer {
  title: string;
  description: string;
  referenceId: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent {
  services: ServiceOffer[] = [
    {
      title: 'Application web métier',
      description:
        'Conception et développement d’applications web, de l’API jusqu’à l’interface.',
      referenceId: 'application-web-metier',
    },
    {
      title: 'TMA — Tierce Maintenance Applicative',
      description:
        'Analyse et correction d’incidents, évolutions fonctionnelles et support sur une application déjà en production.',
      referenceId: 'tma',
    },
    {
      title: 'DevOps',
      description:
        'Conteneurisation, déploiement et mise en ligne (Docker, Nginx, VPS) pour un livrable utilisable.',
      referenceId: 'devops',
    },
  ];
}
