import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface NavItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  @Input() navItems: NavItem[] = [
    { name: 'Accueil', link: '/home' },
    { name: 'Mon expérience pro', link: '/experience' },
    { name: 'Mes projets', link: '/projets' },
    { name: 'Blog', link: '/blog' },
    { name: 'Messages', link: '/messages' },
  ];
  @Output() searchInputEmit = new EventEmitter<string>();

  menuOpen = false;
  searchValue = '';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onSearchInput(value: string) {
    this.searchValue = value;
    this.searchInputEmit.emit(value);
  }
}
