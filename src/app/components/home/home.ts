import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  // Nom et informations
  firstName = 'Ali';
  lastName = 'KHLIFI';
  
  // Texte descriptif
  description = `Diplômé de l'Université Grenoble Alpes, je conçois des applications complètes, de la base de données à l'interface utilisateur. Spring Boot, Angular, Kubernetes : ma signature technique pour des projets qui voyagent du code jusqu'à la production.`;

  // Entreprises avec lesquelles il a travaillé
  companies = [
    { name: 'coexya', url: 'https://www.coexya.eu/en/', logo: 'assets/img/LogoCoexya.png' },
    { name: 'smile', url: 'https://smile.eu/fr', logo: 'assets/img/Logo_Smile.png' },
    { name: 'atolcd', url: 'https://www.atolcd.com/', logo: 'assets/img/atolcd.png' }
  ];
}
