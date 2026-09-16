import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationDraftService } from '../../services/prestation-draft.service';

@Component({
  selector: 'app-simulateur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simulateur.html',
  styleUrl: './simulateur.css',
})
export class SimulateurComponent {
  /** Aligné sur la brique Services */
  services = [
    'Application web métier',
    'TMA — Tierce Maintenance Applicative',
    'DevOps',
  ];

  contexts = [
    'Nouveau projet',
    'Application existante',
    'Déjà en production',
  ];

  selectedService = this.services[0];
  selectedContext = this.contexts[0];

  constructor(private draftService: PrestationDraftService) {}

  selectService(service: string) {
    this.selectedService = service;
  }

  selectContext(context: string) {
    this.selectedContext = context;
  }

  goToContact(event: Event) {
    event.preventDefault();
    this.draftService.setDraft(this.selectedService, this.selectedContext);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
