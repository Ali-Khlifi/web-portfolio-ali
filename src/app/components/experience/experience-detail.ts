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

      <h1 class="detail-title">{{ experience?.presentation }}</h1>

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
          <h2 class="section-title">📝 Missions Principales</h2>
          <ul class="missions-list">
            <li *ngFor="let mission of experience.mainMissions">{{ mission }}</li>
          </ul>
        </section>

        <!-- Technologies -->
        <section class="detail-section">
          <h2 class="section-title">💻 Technologies Utilisées</h2>
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
      duration: 'Depuis mars 2025',
      shortDescription: 'Participation à la conception et à la mise en oeuvre de la plateforme de services (PFS), dédiée aux solutions de Mobility as a Service (MaaS).',
      logo: 'assets/img/LogoCoexya.png',
      presentation: 'Projet Mobilité Métropole Aix en Marseille-Provence',
      context: 'COEXYA cherche à moderniser ses outils de gestion des campagnes marketing avec une plateforme intégrée et performante.',
      objectives: 'Créer une plateforme complète pour gérer l\'automatisation marketing, le tracking de performances et l\'analytique.',
      team: 'Chef de projet, 2 développeurs fullstack',
      methodology: 'Agile, sprints de 2 semaines',
      technologies: ['Angular', 'Java Spring Boot', 'PostgreSQL', 'Docker', 'REST API', 'Analytics'],
      technologiesIcons: [
        'assets/img/angular.png',
        'assets/img/java.png',
        'assets/img/postgresqlmbol.jpg',
        'assets/img/docker.png',        'assets/img/Unofficial_JavaScript_logo_2.svg.png',        'assets/img/Unofficial_JavaScript_logo_2.svg.png'
      ],
      technicalDetails: 'Application fullstack avec architecture modulaire. Intégration de systèmes de reporting time-real et dashboards analytiques.',
      mainMissions: [
        'Développement des composants Angular pour l\'interface de gestion des campagnes',
        'Création des APIs RESTful pour l\'automation marketing',
        'Mise en place des dashboards analytiques',
        'Intégration des systèmes de tracking et reporting'
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
      title: 'Projet Haut de France Mobilité',
      company: 'COEXYA',
      duration: '1 an et 8 mois',
      shortDescription: 'Projet de développement d\'une solution de mobilité intelligente pour la région Haut de France, facilitant les déplacements urbains et interurbains.',
      logo: 'assets/img/LogoCoexya.png',
      presentation: 'Projet Haut de France Mobilité',
      context: 'COEXYA a besoin d\'une solution moderne pour gérer les accès utilisateurs, les permissions et les rôles au sein de ses clients.',
      objectives: 'Développer une application web complète pour simplifier la gestion des droits d\'accès et des authentifications.',
      team: 'Chef de projet, 3 développeurs',
      methodology: 'Agile, sprints de 1 semaine',
      technologies: ['Angular', 'Java Spring Boot', 'PostgreSQL', 'OAuth2', 'JWT', 'Docker', 'Kubernetes'],
      technologiesIcons: [
        'assets/img/angular.png',
        'assets/img/java.png',
        'assets/img/postgresqlmbol.jpg',
        'assets/img/Unofficial_JavaScript_logo_2.svg.png',
        'assets/img/docker.png',
        'assets/img/docker-kubernetes.png'
      ],
      technicalDetails: 'Application sécurisée avec authentification OAuth2 et gestion des tokens JWT. Architecture microservices conteneurisée.',
      mainMissions: [
        'Développement de l\'interface de gestion des utilisateurs et rôles',
        'Implémentation du système d\'authentification OAuth2',
        'Gestion des permissions et du contrôle d\'accès',
        'Mise en place de tests de sécurité'
      ],
      skillsAcquired: [
        'Sécurité web et authentification',
        'Gestion des permissions et rôles',
        'Architecture microservices',
        'Gestion d\'équipe en agile'
      ]
    },
    {
      id: 'smile-skillquiz',
      title: 'Projet SkillQuiz',
      company: 'SMILE',
      duration: '6 mois',
      shortDescription: 'Plateforme d\'évaluation des compétences permettant aux utilisateurs de tester et valider leurs connaissances à travers des quizz interactifs.',
      logo: 'assets/img/Logo_Smile.png',
      presentation: 'Application de Recrutement - Refonte Angular/Java',
      context: 'SMILE, cabinet de conseil en technologies, modernise ses outils internes de recrutement avec une application web complète.',
      objectives: 'Refondre l\'application existante avec Angular et Java Spring pour améliorer l\'expérience utilisateur et les performances.',
      team: 'Chef de projet, 2 développeurs',
      methodology: 'Agile, sprints de 2 semaines',
      technologies: ['Angular', 'Java Spring Boot', 'PostgreSQL', 'Docker', 'REST API'],
      technologiesIcons: [
        'assets/img/angular.png',
        'assets/img/java.png',
        'assets/img/postgresqlmbol.jpg',
        'assets/img/docker.png',
        'assets/img/Unofficial_JavaScript_logo_2.svg.png'
      ],
      technicalDetails: 'Application full stack avec architecture monolithique. Intégration de formulaires dynamiques, gestion d\'authentification, et tableaux de bord analytiques.',
      mainMissions: [
        'Développement des composants Angular pour l\'interface de recrutement',
        'Création des APIs RESTful avec Spring Boot',
        'Mise en place de la gestion des candidatures et du suivi',
        'Tests unitaires et d\'intégration'
      ],
      skillsAcquired: [
        'Développement full stack Angular/Java Spring',
        'Gestion de projet Agile',
        'Architecture REST',
        'Bonnes pratiques de développement web'
      ]
    },
    {
      id: 'atolcd-tnauu',
      title: 'Projet TNAUU',
      company: 'ATOLCD',
      duration: '6 mois',
      shortDescription: 'Développement d\'une solution complète de gestion d\'infrastructure et d\'optimisation des ressources pour améliorer la performance des systèmes d\'information.',
      logo: 'assets/img/atolcd.png',
      presentation: 'Projet TNAUU - Gestion d\'Infrastructure Optimisée',
      context: 'ATOLCD cherche à moderniser sa gestion des infrastructures informatiques avec une solution intégrée et performante.',
      objectives: 'Développer une plateforme complète pour monitorer et optimiser les ressources informatiques en temps réel.',
      team: 'Chef de projet, 2 développeurs fullstack',
      methodology: 'Agile, sprints de 2 semaines',
      technologies: ['Angular', 'Java Spring Boot', 'PostgreSQL', 'Docker', 'REST API', 'Monitoring'],
      technologiesIcons: [
        'assets/img/angular.png',
        'assets/img/java.png',
        'assets/img/postgresqlmbol.jpg',
        'assets/img/docker.png',
        'assets/img/Unofficial_JavaScript_logo_2.svg.png',
        'assets/img/Unofficial_JavaScript_logo_2.svg.png'
      ],
      technicalDetails: 'Application fullstack avec architecture modulaire. Intégration de systèmes de monitoring temps-réel et dashboards d\'analytique avancée.',
      mainMissions: [
        'Développement des interfaces de gestion d\'infrastructure',
        'Création des APIs RESTful pour le monitoring',
        'Mise en place des dashboards de performance',
        'Intégration des systèmes d\'alerte et de reporting'
      ],
      skillsAcquired: [
        'Développement fullstack Angular/Java Spring',
        'Systèmes de monitoring et optimisation',
        'Architecture scalable',
        'Gestion de projet Agile'
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
