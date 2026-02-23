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
  technologiesIcons?: string[];
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
      <a routerLink="/experience" class="cta-button">< Retour aux Expériences</a>

      <div class="detail-header" *ngIf="experience">
        <h1 class="detail-title">{{ experience.presentation }}</h1>
        <h3 class="detail-meta">{{ experience.duration }} | Pour le compte de {{ experience.company === 'COEXYA' ? 'la Métropole Aix-Marseille-Provence' : experience.company }}</h3>
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
          <div class="technologies-icons" *ngIf="experience.technologiesIcons && experience.technologiesIcons.length > 0">
            <div class="tech-icon-wrapper" *ngFor="let icon of experience.technologiesIcons; let i = index" [title]="experience.technologies[i]">
              <img [src]="icon" [alt]="experience.technologies[i]" class="tech-icon" onerror="this.src='assets/img/logo.png'">
            </div>
          </div>
          <!-- Fallback if no icons -->
          <div class="technologies-list" *ngIf="!experience.technologiesIcons || experience.technologiesIcons.length === 0">
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
      id: 'coexya-mobilite-aix',
      title: 'Projet Mobilité Métropole Aix en Marseille-Provence',
      company: 'COEXYA',
      duration: 'Mars 2025 – Aujourd\'hui',
      shortDescription: 'Participation à la conception et à la mise en oeuvre de la plateforme de services (PFS), dédiée aux solutions de Mobility as a Service (MaaS).',
      logo: 'assets/img/LogoCoexya.png',
      presentation: 'Projet MAMP',
      context: 'Au sein d\'une équipe de 13 personnes, je contribue à la conception et au déploiement de la Plateforme de Services (PFS), une solution innovante de type Mobility as a Service (MaaS). Cette plateforme unifiée permet aux usagers des transports en commun de gérer leur compte voyageur, de lier leurs comptes partenaires, de suivre leurs transactions et d\'accéder à un service après-vente intégré.',
      objectives: 'Créer une plateforme complète pour gérer l\'automatisation marketing, le tracking de performances et l\'analytique.',
      team: 'Une organisation agile composée d\'un architecte, d\'un business analyste, d\'un chef de projet et de 10 développeurs',
      methodology: 'Agile, sprints de 2 semaines',
      technologies: ['Java 21', 'Spring Boot', 'Keycloak', 'JSX', 'Liquibase', 'PostgreSQL', 'Docker', 'Kubernetes', 'JUnit 5', 'MockMvc', 'Git', 'SonarQube'],
      technologiesIcons: undefined,
      technicalDetails: 'Application fullstack avec architecture modulaire. Intégration de systèmes de reporting time-real et dashboards analytiques.',
      mainMissions: [
        'Développement d\'APIs Spring Boot en architecture microservices, en adoptant une approche TDD (Test Driven Development) avec JUnit 5 et MockMvc pour garantir robustesse et maintenabilité',
        'Personnalisation avancée des interfaces et des flux d\'authentification avec Keycloak',
        'Modélisation et évolution du schéma de base de données PostgreSQL, avec gestion des versions via Liquibase',
        'Conteneurisation des services avec Docker et orchestration des déploiements sur Kubernetes, assurant scalabilité et résilience'
      ],
      skillsAcquired: [
        'Développement fullstack Angular/Java Spring',
        'Systèmes de reporting et analytics',
        'Gestion de projet Agile',
        'Architecture scalable'
      ]
    },
    {
      id: 'coexya-hdf-mobilite',
      title: 'Projet PassPass',
      company: 'Hauts-de-France Mobilités',
      duration: 'Octobre 2023 – Juillet 2025',
      shortDescription: 'Refonte complète de PassPass, une plateforme web et mobile de vente de titres de transport et d\'abonnements destinée au grand public.',
      logo: 'assets/img/LogoCoexya.png',
      presentation: 'Projet PassPass',
      context: 'Refonte complète de PassPass, une plateforme web et mobile de vente de titres de transport et d\'abonnements destinée au grand public, dans le cadre d\'une équipe agile dédiée à la modernisation du service.',
      objectives: 'Moderniser la plateforme de vente de titres de transport avec une architecture scalable et une expérience utilisateur optimale.',
      team: 'Collectif de 9 personnes : un architecte, six développeurs web, deux développeurs mobiles et un chef de projet.',
      methodology: 'Agile, sprints de 2 semaines',
      technologies: ['Java 21', 'Spring Boot', 'Kong', 'Keycloak', 'JSX', 'Drupal', 'PostgreSQL', 'Docker', 'Kubernetes', 'JUnit 5', 'MockMvc', 'Maven', 'Git'],
      technologiesIcons: undefined,
      technicalDetails: 'Plateforme fullstack avec architecture microservices intégrée à un écosystème complexe incluant Kong et Keycloak.',
      mainMissions: [
        'Conception technique et rédaction de spécifications d\'APIs à partir des besoins fonctionnels, en collaboration avec l\'équipe métier.',
        'Développement d\'APIs Spring Boot en architecture microservices, intégrées à un écosystème complexe incluant Kong et Keycloak.',
        'Création de composants frontend en JSX, intégrés dans Drupal pour une expérience utilisateur cohérente et réactive.',
        'Développement de SPIs et personnalisation poussée de l\'interface d\'authentification avec Keycloak.',
        'Mise en place de tests unitaires et d\'intégration pour assurer la fiabilité des livraisons.',
        'Participation aux déploiements continus sur Kubernetes, garantissant une mise en production maîtrisée.'
      ],
      skillsAcquired: [
        'Développement fullstack Java Spring/JSX',
        'Architecture microservices complexe',
        'Intégration Kong et Keycloak',
        'Déploiements Kubernetes'
      ]
    },
    {
      id: 'smile-skillquiz',
      title: 'Plateforme interne de quiz techniques',
      company: 'SMILE',
      duration: 'Stage PFE',
      shortDescription: 'Conception et développement d\'une application interne visant à optimiser les processus de recrutement et à valider les compétences techniques des collaborateurs.',
      logo: 'assets/img/Logo_Smile.png',
      presentation: 'Plateforme interne de quiz techniques',
      context: 'Conception et développement d\'une application interne visant à optimiser les processus de recrutement et à valider les compétences techniques des collaborateurs, dans une démarche d\'innovation et de performance.',
      objectives: 'Créer une plateforme de quiz pour l\'évaluation des compétences techniques des candidats et collaborateurs.',
      team: 'Projet mené en autonomie, avec des interactions régulières avec les équipes RH et techniques pour recueillir les besoins et ajuster les fonctionnalités.',
      methodology: 'Agile, sprints de 2 semaines',
      technologies: ['Java 17', 'Spring Boot', 'Angular 12', 'PostgreSQL', 'Docker', 'Kubernetes', 'JUnit 5', 'Git', 'GitLab CI/CD'],
      technologiesIcons: undefined,
      technicalDetails: 'Application fullstack avec architecture modulaire et évolutive, intégration continue via GitLab CI/CD.',
      mainMissions: [
        'Refonte complète du backend avec Spring Boot, en privilégiant une architecture modulaire et évolutive.',
        'Modélisation et optimisation du modèle de données pour répondre aux besoins spécifiques de l\'application.',
        'Développement des interfaces frontend avec Angular 12, pour une expérience utilisateur fluide et intuitive.',
        'Implémentation d\'une stratégie de tests unitaires et d\'intégration, garantissant la stabilité de l\'application.',
        'Conteneurisation avec Docker et déploiement sur Kubernetes, avec mise en place d\'une chaîne d\'intégration continue via GitLab CI/CD.'
      ],
      skillsAcquired: [
        'Développement fullstack Angular/Java Spring',
        'Architecture modulaire et scalable',
        'Intégration continue avec GitLab CI/CD',
        'Gestion de projet en autonomie'
      ]
    },
    {
      id: 'atolcd-tnauu',
      title: 'Application TNAAU - Gestion des appels d\'urgence',
      company: 'ATOLCD',
      duration: 'À préciser',
      shortDescription: 'Contribution sur la nouvelle version de l\'application TNAAU, dédiée à la gestion des appels d\'urgence pour les opérateurs télécoms.',
      logo: 'assets/img/atolcd.png',
      presentation: 'Application TNAAU - Gestion des appels d\'urgence',
      context: 'Contribution sur la nouvelle version de l\'application TNAAU, dédiée à la gestion des appels d\'urgence pour les opérateurs télécoms. L\'application assure le routage des numéros courts (15, 17, 18, etc.) vers les services compétents.',
      objectives: 'Moderniser et refondre l\'application de gestion des appels d\'urgence avec une architecture robuste et performante.',
      team: 'Projet encadré au sein d\'une équipe technique pluridisciplinaire, avec des échanges réguliers avec les opérateurs et les parties prenantes métier.',
      methodology: 'Agile, sprints de 2 semaines',
      technologies: ['Java (J2EE)', 'JavaScript', 'Vue.js', 'HTML/CSS', 'PostgreSQL', 'GeoServer', 'Jenkins', 'Docker', 'Git'],
      technologiesIcons: undefined,
      technicalDetails: 'Application fullstack avec intégration de composants cartographiques avancés pour le routage géographique des appels d\'urgence.',
      mainMissions: [
        'Analyse de l\'existant et refonte complète du modèle de données pour améliorer la performance et la maintenabilité.',
        'Développement de services REST en Java (J2EE), assurant l\'interfaçage avec les systèmes existants.',
        'Création d\'interfaces frontend dynamiques avec Vue.js, intégrant des composants cartographiques avancés via GeoServer.',
        'Mise en place de l\'intégration continue avec Jenkins et conteneurisation des services avec Docker.'
      ],
      skillsAcquired: [
        'Développement fullstack Java/Vue.js',
        'Systèmes de routage d\'appels d\'urgence',
        'Intégration SIG avec GeoServer',
        'Intégration continue avec Jenkins'
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.experience = this.experiences.find(exp => exp.id === id);
    });
  }
}
