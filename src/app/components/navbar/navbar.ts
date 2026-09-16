import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

interface NavItem {
  name: string;
  fragment: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  navItems: NavItem[] = [
    { name: 'Accueil', fragment: 'accueil' },
    { name: 'Parcours', fragment: 'parcours' },
    { name: 'Services', fragment: 'services' },
    { name: 'Simuler une prestation', fragment: 'simulateur' },
    { name: 'Contact', fragment: 'contact' },
  ];

  menuOpen = false;
  activeSection = 'accueil';

  private routerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.syncActiveFromUrl(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.syncActiveFromUrl(event.urlAfterRedirects));
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.isLandingPage()) {
      return;
    }
    this.updateActiveSection();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToSection(event: Event, fragment: string) {
    event.preventDefault();
    this.menuOpen = false;
    this.activeSection = fragment;

    if (!this.isLandingPage()) {
      this.router.navigate(['/'], { fragment });
      return;
    }

    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }

  private isLandingPage(): boolean {
    const path = this.router.url.split('#')[0];
    return path === '/' || path === '';
  }

  private syncActiveFromUrl(url: string) {
    const path = url.split('#')[0];

    if (path.startsWith('/references')) {
      this.activeSection = 'services';
      return;
    }

    if (path.startsWith('/experience')) {
      this.activeSection = 'parcours';
      return;
    }

    if (path === '/' || path === '') {
      const fragment = url.includes('#') ? url.split('#')[1] : '';
      if (fragment && this.navItems.some((item) => item.fragment === fragment)) {
        this.activeSection = fragment;
        return;
      }
      this.updateActiveSection();
    }
  }

  private updateActiveSection() {
    const offset = 90;
    let current = this.navItems[0].fragment;

    for (const item of this.navItems) {
      const element = document.getElementById(item.fragment);
      if (element && element.getBoundingClientRect().top <= offset) {
        current = item.fragment;
      }
    }

    this.activeSection = current;
  }
}
