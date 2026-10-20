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
  description =
    'Je suis Ali KHLIFI, ingénieur logiciel. Sous la marque KHLIFI ENGINEERING SERVICES (KES), j’accompagne vos projets web depuis la conception jusqu’à la mise en production.';

  email = 'alikhlifi.kh@gmail.com';
  linkedinUrl = 'https://www.linkedin.com/in/ali-k-77b60a148/';
  githubUrl = 'https://github.com/Ali-Khlifi';
  phone = '+33758624077';
  phoneDisplay = '07 58 62 40 77';

  goToSection(event: Event, fragment: string) {
    event.preventDefault();
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }
}
