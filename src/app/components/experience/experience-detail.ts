import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  shortDescription: string;
  logo: string;
  presentation: string;
  context: string;
  objectives: string;
  team: string;
  methodology: string;
  technologies: string[];
  technicalDetails: string;
  mainMissions: string[];
  skillsAcquired: string[];
}

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="experience-detail-container">
      <a routerLink="/" fragment="experiences" class="cta-button">< Retour aux expériences</a>

      <div class="detail-header" *ngIf="experience">
        <h1 class="detail-title">{{ experience.presentation }}</h1>
        <h3 class="detail-meta">{{ experience.duration }} | {{ experience.company }}</h3>
      </div>

      <div class="detail-content" *ngIf="experience">
        
        <!-- Context -->
        <section class="detail-section">
          <h2 class="section-title">📋 Contexte</h2>
          <p class="section-text">{{ experience.context }}</p>
        </section>

        <!-- Teams -->
        <section class="detail-section">
          <h2 class="section-title">👥 Équipes</h2>
          <p class="section-text">{{ experience.team }}</p>
        </section>

        <!-- Main Missions -->
        <section class="detail-section">
          <h2 class="section-title">📝 Réalisations principales</h2>
          <ul class="missions-list">
            <li *ngFor="let mission of experience.mainMissions">{{ mission }}</li>
          </ul>
        </section>

        <!-- Technologies -->
        <section class="detail-section">
          <h2 class="section-title">💻 Stack technique</h2>
          <div class="technologies-list">
            <span *ngFor="let tech of experience.technologies" class="tech-badge">{{ tech }}</span>
          </div>
        </section>
      </div>
    </div>
  `,
  styleUrl: './experience-detail.css',
})
export class ExperienceDetailComponent implements OnInit {
  experience: Experience | undefined;

  experiences: Experience[] = [
    {
      id: 'coexya-legifrance',
      title: 'Légifrance — Développeur Java Full Stack',
      company: 'DILA — legifrance.gouv.fr (via COEXYA)',
      duration: 'Juillet 2026 – Aujourd’hui',
      shortDescription:
        'TMA de la plateforme Légifrance et contribution au module Mon Compte Légifrance : authentification et gestion de compte via Keycloak, en binôme avec le tech lead.',
      logo: 'assets/img/LogoCoexya.png',
      presentation: 'Légifrance — Mon Compte',
      context:
        'Mission chez la DILA sur legifrance.gouv.fr : TMA de la plateforme Légifrance et contribution au module Mon Compte Légifrance (authentification et gestion de compte via Keycloak)',
      objectives:
        'Assurer la TMA Légifrance et faire évoluer Mon Compte (identité, SSO, APIs) de façon fiable et maintenable.',
      team: 'Équipe de 12 personnes',
      methodology: 'Agile',
      technologies: [
        'Java',
        'Spring Boot',
        'Keycloak',
        'Thymeleaf',
        'Spring Security / OAuth2',
        'PostgreSQL',
        'Flyway',
        'Docker',
        'Maven',
        'Ansible',
        'GitLab',
      ],
      technicalDetails:
        'APIs REST Spring Boot pour Mon Compte, personnalisation Keycloak (thèmes, flows, SSO), PostgreSQL / Flyway, Docker, Ansible et GitLab.',
      mainMissions: [
        'TMA : analyse, correction d’incidents et évolutions sur la plateforme Légifrance',
        'Responsable fonctionnel / technique du module Mon Compte Légifrance (binôme avec le tech lead)',
        'Conception et développement de l’authentification et de la gestion de compte (Keycloak)',
        'Développement d’APIs REST Spring Boot (backend Mon Compte)',
        'Personnalisation Keycloak : thèmes, flows d’authentification, intégration SSO',
        'Évolution du modèle de données (PostgreSQL / Flyway)',
        'Support et coordination avec l’équipe sur les sujets identité / compte utilisateur',
      ],
      skillsAcquired: [
        'TMA et coordination identité',
        'Keycloak (thèmes, flows, SSO)',
        'Spring Boot / OAuth2',
        'PostgreSQL & Flyway',
      ],
    },
    {
      id: 'coexya-mobilite-aix',
      title: 'MAMP — Développeur Java / React',
      company: 'Métropole Aix-Marseille-Provence — lametropolemobilite.fr (via COEXYA)',
      duration: 'Août 2023 – Mars 2025',
      shortDescription:
        'Conception et développement du module d’inscription scolaire de la plateforme MaaS — compte de mobilité unifié pour la Métropole Aix-Marseille-Provence.',
      logo: 'assets/img/LogoCoexya.png',
      presentation: 'Projet MAMP — Inscription scolaire MaaS',
      context:
        'Conception et développement du module d’inscription scolaire de la plateforme MaaS — compte de mobilité unifié pour la Métropole Aix-Marseille-Provence (lametropolemobilite.fr).',
      objectives:
        'Livrer le module d’inscription scolaire et les APIs associées sur une plateforme MaaS scalable et sécurisée.',
      team:
        'Équipe agile de 13 personnes (1 architecte, 10 développeurs, 1 BA, 1 CP)',
      methodology: 'Agile',
      technologies: [
        'Java 21',
        'Spring Boot',
        'Kafka',
        'Keycloak',
        'React / JSX',
        'Liquibase',
        'MockMvc',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
        'Maven',
        'SonarQube',
        'Gatling',
      ],
      technicalDetails:
        'APIs REST microservices (TDD / DDD), React / JSX, Keycloak SPI & thèmes, Liquibase, Kubernetes, CI/CD GitLab, performances Gatling.',
      mainMissions: [
        'Développement d’APIs REST microservices (TDD / DDD)',
        'Modélisation et évolution du schéma de données avec Liquibase',
        'Développement du Back Office React / JSX',
        'Keycloak : SPI custom, thèmes FreeMarker, flows d’authentification',
        'Orchestration Kubernetes (k9s), pipelines CI/CD GitLab',
        'Optimisation des performances APIs avec Gatling',
        'Rédaction des spécifications techniques et documentation APIs',
      ],
      skillsAcquired: [
        'Microservices Spring (TDD / DDD)',
        'Keycloak SPI & thèmes',
        'React / JSX & Kubernetes',
        'Perf APIs (Gatling)',
      ],
    },
    {
      id: 'coexya-hdf-mobilite',
      title: 'PassPass — Développeur Java / React',
      company: 'Hauts-de-France Mobilités — passpass.fr (via COEXYA)',
      duration: 'Août 2023 – Mars 2025',
      shortDescription:
        'Refonte de la plateforme web et mobile de vente de titres de transport et d’abonnements pour Hauts-de-France Mobilités.',
      logo: 'assets/img/LogoCoexya.png',
      presentation: 'Projet PassPass',
      context:
        'Refonte de la plateforme web et mobile de vente de titres de transport et d’abonnements (passpass.fr) pour Hauts-de-France Mobilités.',
      objectives:
        'Moderniser la vente de titres et d’abonnements avec une architecture microservices fiable.',
      team:
        'Équipe agile : 1 architecte, 6 développeurs web, 2 développeurs mobiles, 1 CP',
      methodology: 'Agile',
      technologies: [
        'Java 21',
        'Spring Boot',
        'Kong',
        'Keycloak',
        'React / JSX',
        'Drupal',
        'JUnit 5',
        'MockMvc',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
        'Maven',
        'SonarQube',
      ],
      technicalDetails:
        'APIs Spring microservices (TDD / DDD), React/JSX intégré à Drupal, Keycloak SPI, Kong, tests et déploiements Kubernetes.',
      mainMissions: [
        'Conception technique et rédaction des documents d’APIs',
        'Développement d’APIs Spring microservices (TDD / DDD)',
        'Composants frontend React / JSX intégrés dans Drupal',
        'Keycloak : SPI custom, personnalisation UI',
        'Tests unitaires et d’intégration (JUnit 5, MockMvc)',
        'Déploiement microservices avec Kubernetes',
      ],
      skillsAcquired: [
        'Microservices et API Gateway (Kong)',
        'Intégration Drupal / React',
        'Keycloak SPI',
        'Qualité et tests',
      ],
    },
    {
      id: 'smile-skillquiz',
      title: 'SMILE — Développeur Full Stack, Stage PFE',
      company: 'SMILE — Lyon',
      duration: 'Mars 2023 – Août 2023',
      shortDescription:
        'Développement d’une plateforme interne de quiz techniques pour optimiser le recrutement et valider les compétences des collaborateurs.',
      logo: 'assets/img/Logo_Smile.png',
      presentation: 'Plateforme interne de quiz techniques',
      context:
        'Développement d’une plateforme interne de quiz techniques pour optimiser les processus de recrutement et valider les compétences des collaborateurs.',
      objectives:
        'Livrer une application fullstack de quiz techniques, conteneurisée et déployable.',
      team: 'Stage PFE — on-site, Lyon',
      methodology: 'Agile',
      technologies: [
        'Java 17',
        'Spring Boot',
        'Angular 12',
        'JUnit 5',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
      ],
      technicalDetails:
        'Backend Spring Boot, frontend Angular 12, tests, Docker et déploiement Kubernetes.',
      mainMissions: [
        'Refonte complète du backend avec Spring Boot',
        'Modélisation et évolution du modèle de données',
        'Développement des nouvelles fonctionnalités frontend avec Angular',
        'Mise en place de tests unitaires et d’intégration',
        'Conteneurisation Docker et déploiement Kubernetes',
      ],
      skillsAcquired: [
        'Fullstack Angular / Spring Boot',
        'Docker & Kubernetes',
        'Tests unitaires et d’intégration',
        'Modélisation de données',
      ],
    },
    {
      id: 'atolcd-tnauu',
      title: 'Atol CD — Développeur Java, Stage',
      company: 'Atol Conseils et Développements — Dijon',
      duration: 'Mars 2022 – Septembre 2022',
      shortDescription:
        'Contribution au développement d’une application dédiée à la gestion des appels d’urgence pour les préfectures.',
      logo: 'assets/img/atolcd.png',
      presentation: 'Gestion des appels d’urgence',
      context:
        'Contribution au développement d’une application dédiée à la gestion des appels d’urgence pour les préfectures.',
      objectives:
        'Concevoir et livrer des services web REST et des fonctionnalités métier (formulaires, fichiers ODS).',
      team: 'Stage — Dijon',
      methodology: 'Agile',
      technologies: [
        'Java',
        'Services web REST',
        'PostgreSQL',
        'Formulaires / ODS',
      ],
      technicalDetails:
        'Services web REST Java, nouvelles fonctionnalités, correction de bugs, manipulation de formulaires et fichiers ODS.',
      mainMissions: [
        'Conception et développement de services web suivant l’approche REST',
        'Développement de nouvelles fonctionnalités et correction de bugs',
        'Manipulation de formulaires et fichiers ODS',
      ],
      skillsAcquired: [
        'Java / REST',
        'Maintenance applicative',
        'Traitement de formulaires et ODS',
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.experience = this.experiences.find(exp => exp.id === id);
    });
  }
}
