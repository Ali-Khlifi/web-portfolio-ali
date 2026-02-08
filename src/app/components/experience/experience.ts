import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  isDisplayTel = false;
  isDisplayMail = false;
  displayCertificates = true;

  // Profile contact info
  phone = '07 58 62 40 77';
  email = 'alikhlifi.kh@gmail.com';
  linkedinUrl = 'https://www.linkedin.com/in/ali-khlifi-77b60a148/';
  githubUrl = 'https://github.com/Ali-Khlifi';

  // About text
  aboutText = `Extrêmement motivé pour développer constamment mes compétences et évoluer professionnellement. 
    Je suis confiant dans ma capacité à proposer des idées innovantes pour élaborer des applications Web 
    de plus en plus performantes.`;

  // Experiences
  experiences = [
    {
      title: 'Développeur Web',
      duration: 'Mars - Septembre 2022',
      description: [
        'Participation au développement d\'une application web dédiée à la gestion des appels d\'urgence pour les préfectures',
        'Développement des services Web type RESTful (JAX-RS), implémentation RESTEasy avec Java',
        'Développement des nouvelles fonctionnalités et correction de bugs : création des formulaires, manipulation de fichiers, gestion des notifications'
      ]
    },
    {
      title: 'Développeur WebSIG',
      duration: 'Janvier - Février 2022',
      description: [
        'Développement d\'une application web pour la gestion des ressources en eau d\'une agglomération urbaine',
        'Conception et mise en œuvre d\'une base de données relationnelle',
        'Développement d\'une interface utilisateur responsive'
      ]
    },
    {
      title: 'Chargé d\'études SIG',
      duration: '2018 - 2020',
      description: [
        'Développement des scripts d\'automatisation des processus SIG avec Python',
        'Mise en place d\'un suivi graphique des projets (automatisation des mises à jour des données d\'entrées rafraichies de façon hebdomadaire)'
      ]
    }
  ];

  // Skills
  skills = [
    {
      category: 'Programmation',
      items: ['Java', 'JavaScript, HTML, CSS', 'Python, SQL', 'Vue.js', 'Angular', 'Spring Boot']
    },
    {
      category: 'Modélisation / SGBD',
      items: ['PostgreSQL', 'SQLite', 'UML']
    },
    {
      category: 'Environnement technique',
      items: ['Linux', 'Git/GitHub', 'Docker', 'IntelliJ, VSCode']
    },
    {
      category: 'Projets réalisés',
      items: [
        'Développement d\'une application métier pour la gestion des ressources en eau de la ville de Zaghouan.',
        'Participation au développement d\'une solution SIG permettant de visualiser la mobilité vélo à Toulouse et à Lyon.'
      ]
    }
  ];

  // Formation
  education = [
    {
      title: 'Master 2 Informatique - technologies web',
      duration: '2022 - 2023',
      logo: 'assets/img/logo.png'
    },
    {
      title: 'Master 2 Géomatique',
      duration: '2021 - 2022',
      logo: 'assets/img/ensat.png'
    },
    {
      title: 'Maîtrise en Géosciences et environnement',
      duration: '2020 - 2021',
      logo: 'assets/img/univ-lorraine.png'
    }
  ];

  // Certificates
  certificates = [
    'Programmation avec Java - CODEGYM',
    'Databases and SQL - IBM',
    'Data Analysis with Python - UDACITY'
  ];

  toggleCertificates() {
    this.displayCertificates = !this.displayCertificates;
  }
}
