import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  @Input() navItems: NavItem[] = [
    { name: 'Accueil', link: '/home' },
    { name: 'Mon expérience pro', link: '/experience' },
    { name: 'Mes projets', link: '/projets' },
    { name: 'Contacts', link: '/contacts' },
  ];

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
