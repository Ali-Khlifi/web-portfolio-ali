import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  // Nom et informations
  firstName = 'Ali';
  lastName = 'KHLIFI';
  
  // Texte descriptif
  description = `Ingénieur en informatique diplômé de l'Université Grenoble Alpes. Passionné par le développement web, je suis spécialisé dans la conception d'APIs avec Spring Boot, les architectures microservices, Angular, ainsi que le déploiement conteneurisé (Docker/Kubernetes).`;

  // Informations de contact
  email = 'alikhlifi.kh@gmail.com';
  linkedinUrl = 'https://www.linkedin.com/in/ali-k-77b60a148/';
  linkedinName = 'Ali KHLIFI';
  cvFile = 'assets/files/CV Ali KHLIFI 01-2026 .pdf';
  
  // Entreprises avec lesquelles il a travaillé
  companies = [
    { name: 'coexya', url: 'https://www.coexya.eu/en/', logo: 'assets/img/LogoCoexya.png' },
    { name: 'smile', url: 'https://smile.eu/fr', logo: 'assets/img/Logo_Smile.png' },
    { name: 'atolcd', url: 'https://www.atolcd.com/', logo: 'assets/img/atolcd.png' }
  ];
}
