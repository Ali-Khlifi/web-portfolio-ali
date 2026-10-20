import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface JourneyStop {
  place: string;
  master: string;
  school?: string;
  year: string;
  current?: boolean;
}

interface Certification {
  id: string;
  brand: string;
  badgeTitle: string;
  badgeLevel: string;
  label: string;
  month: string;
  year: string;
  image?: string;
  /** Aperçu HTML si pas d’image officielle. */
  preview?: {
    org: string;
    subtitle: string;
    course: string;
    completed: string;
    awardedTo: string;
  };
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  selectedCert: Certification | null = null;

  /** Parcours — du plus récent au plus ancien. */
  journeyStops: JourneyStop[] = [
    {
      place: 'Lyon',
      master: 'Ingénieur logiciel',
      year: 'Depuis 2023',
      current: true,
    },
    {
      place: 'Grenoble',
      master: 'Master informatique',
      school: 'Université Grenoble Alpes',
      year: '2023',
    },
    {
      place: 'Toulouse',
      master: 'Master géomatique',
      school: 'INP de Toulouse',
      year: '2022',
    },
    {
      place: 'Tunisie',
      master: 'Ingénieur civil',
      school: 'INAT',
      year: '2017',
    },
  ];

  certifications: Certification[] = [
    {
      id: 'aws',
      brand: 'aws',
      badgeTitle: 'Cloud Practitioner',
      badgeLevel: 'FOUNDATIONAL',
      label: 'AWS Cloud Practitioner Essentials',
      month: 'Nov',
      year: '2025',
      image: 'assets/img/cert-aws-cloud-practitioner.png',
    },
    {
      id: 'anglais-b2',
      brand: 'amideast',
      badgeTitle: 'Business English',
      badgeLevel: 'CEFR B2',
      label: 'Amideast — Anglais B2',
      month: 'B2',
      year: '2020',
      preview: {
        org: 'Amideast / Tunisia',
        subtitle: 'Completion Certificate',
        course: 'Business English — CEFR B2',
        completed: 'English Language Program',
        awardedTo: 'Ali KHLIFI',
      },
    },
  ];

  openCert(cert: Certification, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.selectedCert = cert;
  }

  closeCert() {
    this.selectedCert = null;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeCert();
  }
}
