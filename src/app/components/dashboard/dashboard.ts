import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  // Nom et informations
  firstName = 'Son-Tony';
  lastName = 'Dinh';
  
  // Texte descriptif (extrait de la page expérience)
  description = `Ingénieur diplômé de l'INSA Lyon en télécommunications, je suis passionné par le développement web. Spécialisé dans les technologies Angular et Java Spring, je conçois des applications web robustes et innovantes.`;

  // Informations de contact
  email = 'sontony.dinh@gmail.com';
  linkedinUrl = 'https://www.linkedin.com/in/son-tony-dinh/';
  linkedinName = 'Son-Tony DINH';
  cvFile = 'assets/files/CV Ali KHLIFI 01-2026 .pdf';
  
  // Entreprises avec lesquelles il a travaillé
  companies = [
    { name: 'COEXYA', url: 'https://www.coexya.eu/en/' },
    { name: 'SMILE', url: 'https://smile.eu/fr' }
  ];
}
