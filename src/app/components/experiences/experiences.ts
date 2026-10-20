import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  shortDescription: string;
  logo: string;
}

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './experiences.html',
  styleUrl: './experiences.css',
})
export class ExperiencesComponent {
  experiencesLead =
    'Plus de 3 ans sur des projets Java fullstack — APIs Spring, identité (Keycloak), microservices et déploiements Docker/Kubernetes.';

  experiences: Experience[] = [
    {
      id: 'coexya-legifrance',
      title: 'Légifrance — Développeur Java',
      company: 'DILA — legifrance.gouv.fr (via COEXYA)',
      duration: 'Juillet 2026 – Aujourd’hui (3 mois)',
      shortDescription:
        'TMA de la plateforme Légifrance et contribution au module Mon Compte Légifrance : authentification et gestion de compte via Keycloak, en binôme avec le tech lead.',
      logo: 'assets/img/logo-dila.png',
    },
    {
      id: 'coexya-mobilite-aix',
      title: 'MAMP — Développeur Java Full Stack',
      company: 'Métropole Aix-Marseille-Provence — lametropolemobilite.fr (via COEXYA)',
      duration: 'Août 2023 – Mars 2025 (1 an et 8 mois)',
      shortDescription:
        'Conception et développement du module d’inscription scolaire de la plateforme MaaS — compte de mobilité unifié pour la Métropole Aix-Marseille-Provence.',
      logo: 'assets/img/logo-metropole-mobilite.png',
    },
    {
      id: 'coexya-hdf-mobilite',
      title: 'PassPass — Développeur Java Full Stack',
      company: 'Hauts-de-France Mobilités — passpass.fr (via COEXYA)',
      duration: 'Août 2023 – Mars 2025 (1 an et 8 mois)',
      shortDescription:
        'Refonte de la plateforme web et mobile de vente de titres de transport et d’abonnements pour Hauts-de-France Mobilités.',
      logo: 'assets/img/logo-hdf-mobilites.png',
    },
    {
      id: 'smile-skillquiz',
      title: 'SMILE — Développeur Java, Stage PFE',
      company: 'SMILE — Lyon',
      duration: 'Mars 2023 – Août 2023 (6 mois)',
      shortDescription:
        'Développement d’une plateforme interne de quiz techniques pour optimiser le recrutement et valider les compétences des collaborateurs.',
      logo: 'assets/img/Logo_Smile.png',
    },
    {
      id: 'atolcd-tnauu',
      title: 'Atol CD — Développeur Java, Stage',
      company: 'Atol Conseils et Développements — Dijon',
      duration: 'Mars 2022 – Septembre 2022 (6 mois)',
      shortDescription:
        'Contribution au développement d’une application dédiée à la gestion des appels d’urgence pour les préfectures.',
      logo: 'assets/img/logo-tnaau.png',
    },
  ];
}
