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

interface JourneyStop {
  place: string;
  master: string;
  year: string;
  yearNum: number;
  current?: boolean;
  x: number;
  y: number;
}

interface JourneyCert {
  id: string;
  label: string;
  year: string;
  yearNum: number;
  attachX: number;
  attachY: number;
  endX: number;
  endY: number;
  path: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  experiencesLead =
    'Plus de 3 ans sur des projets Java fullstack — APIs Spring, identité (Keycloak), microservices et déploiements Docker/Kubernetes.';

  readonly curveViewHeight = 400;

  /** Courbe type exponentielle inversée : montée rapide puis assouplissement. */
  journeyStops: JourneyStop[] = this.buildCurveStops([
    { place: 'Tunisie', master: 'Génie hydraulique', year: '2017', yearNum: 2017 },
    { place: 'Toulouse', master: 'Master géomatique', year: '2022', yearNum: 2022 },
    { place: 'Grenoble', master: 'Master informatique', year: '2023', yearNum: 2023 },
    {
      place: 'Lyon',
      master: 'Ingénieur logiciel',
      year: 'Depuis 2023',
      yearNum: 2024,
      current: true,
    },
  ]);

  /** Path SVG lissé passant par les points de la courbe. */
  curvePath = this.buildSmoothPath(this.journeyStops);

  /** Certifications en branches descendantes depuis la courbe. */
  journeyCerts: JourneyCert[] = this.buildCertBranches([
    { id: 'anglais-b2', label: 'Anglais B2', year: '2020', yearNum: 2020 },
    { id: 'aws', label: 'AWS', year: '2025', yearNum: 2025 },
  ]);

  /** Mobile : du plus récent au plus ancien, certifs inclus. */
  get journeyStopsMobile(): Array<{
    year: string;
    place: string;
    master: string;
    yearNum: number;
    current?: boolean;
    cert?: boolean;
  }> {
    const stops = this.journeyStops.map((s) => ({
      year: s.year,
      place: s.place,
      master: s.master,
      yearNum: s.yearNum,
      current: s.current,
      cert: false,
    }));
    const certs = this.journeyCerts.map((c) => ({
      year: c.year,
      place: 'Certification',
      master: c.label,
      yearNum: c.yearNum,
      current: false,
      cert: true,
    }));
    return [...stops, ...certs].sort((a, b) => b.yearNum - a.yearNum);
  }

  private buildCurveStops(
    stops: Omit<JourneyStop, 'x' | 'y'>[]
  ): JourneyStop[] {
    const n = stops.length - 1;
    const k = 2.8;
    const max = 1 - Math.exp(-k);
    const x0 = 90;
    const x1 = 910;
    const yBottom = 200;
    const yTop = 70;

    return stops.map((stop, i) => {
      const t = n === 0 ? 0 : i / n;
      const progress = (1 - Math.exp(-k * t)) / max;
      return {
        ...stop,
        x: x0 + t * (x1 - x0),
        y: yBottom - progress * (yBottom - yTop),
      };
    });
  }

  private buildSmoothPath(stops: JourneyStop[]): string {
    if (stops.length < 2) {
      return '';
    }

    let d = `M ${stops[0].x} ${stops[0].y}`;
    for (let i = 0; i < stops.length - 1; i++) {
      const p0 = stops[i];
      const p1 = stops[i + 1];
      const cx = (p0.x + p1.x) / 2;
      d += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`;
    }
    return d;
  }

  private buildCertBranches(
    certs: Omit<JourneyCert, 'attachX' | 'attachY' | 'endX' | 'endY' | 'path'>[]
  ): JourneyCert[] {
    const branchLen = 58;

    return certs.map((cert) => {
      const attach = this.pointOnCurveByYear(cert.yearNum);
      const endX = attach.x;
      const endY = Math.min(attach.y + branchLen, this.curveViewHeight - 36);
      const midY = attach.y + (endY - attach.y) * 0.55;
      const path = `M ${attach.x} ${attach.y} Q ${attach.x} ${midY}, ${endX} ${endY}`;

      return {
        ...cert,
        attachX: attach.x,
        attachY: attach.y,
        endX,
        endY,
        path,
      };
    });
  }

  /** Point sur la courbe (interpolation linéaire entre stops adjacents). */
  private pointOnCurveByYear(yearNum: number): { x: number; y: number } {
    const stops = this.journeyStops;

    if (yearNum <= stops[0].yearNum) {
      return { x: stops[0].x, y: stops[0].y };
    }

    const last = stops[stops.length - 1];
    if (yearNum >= last.yearNum) {
      // AWS 2025 : légèrement avant Lyon pour laisser la bulle courante lisible
      if (yearNum > last.yearNum) {
        const prev = stops[stops.length - 2];
        return {
          x: prev.x + (last.x - prev.x) * 0.82,
          y: prev.y + (last.y - prev.y) * 0.82,
        };
      }
      return { x: last.x, y: last.y };
    }

    for (let i = 0; i < stops.length - 1; i++) {
      const a = stops[i];
      const b = stops[i + 1];
      if (yearNum >= a.yearNum && yearNum <= b.yearNum) {
        const span = b.yearNum - a.yearNum || 1;
        const t = (yearNum - a.yearNum) / span;
        return {
          x: a.x + (b.x - a.x) * t,
          y: a.y + (b.y - a.y) * t,
        };
      }
    }

    return { x: last.x, y: last.y };
  }

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
}
