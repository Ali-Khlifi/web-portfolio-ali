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
    { name: 'Expériences', fragment: 'experiences' },
    { name: 'Services', fragment: 'services' },
    { name: 'Prestation', fragment: 'simulateur' },
    { name: 'Contact', fragment: 'contact' },
  ];

  menuOpen = false;
  activeSection = 'accueil';

  private routerSub?: Subscription;
  private scrollRaf = 0;
  /** Ignore scroll highlights pendant un scroll programmé (clic nav). */
  private scrollLockUntil = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.syncActiveFromUrl(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.syncActiveFromUrl(event.urlAfterRedirects);
        // Sections pas encore dans le DOM juste après navigation vers /
        setTimeout(() => this.updateActiveSection(), 50);
      });

    setTimeout(() => this.updateActiveSection(), 0);
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    if (this.scrollRaf) {
      cancelAnimationFrame(this.scrollRaf);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.isLandingPage() || Date.now() < this.scrollLockUntil) {
      return;
    }
    if (this.scrollRaf) {
      return;
    }
    this.scrollRaf = requestAnimationFrame(() => {
      this.scrollRaf = 0;
      this.updateActiveSection();
    });
  }

  @HostListener('window:resize')
  onWindowResize() {
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
    this.scrollLockUntil = Date.now() + 900;

    if (!this.isLandingPage()) {
      this.router.navigate(['/'], { fragment });
      return;
    }

    history.replaceState(null, '', `#${fragment}`);
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
      this.activeSection = 'experiences';
      return;
    }

    if (path === '/' || path === '') {
      const fragment = url.includes('#') ? url.split('#')[1] : '';
      if (fragment && this.navItems.some((item) => item.fragment === fragment)) {
        this.activeSection = fragment;
        this.scrollLockUntil = Date.now() + 900;
        return;
      }
      this.updateActiveSection();
    }
  }

  /**
   * Active la section qui contient une ligne de référence sous la navbar
   * (plus fiable que top <= 90px, qui laissait Accueil trop longtemps).
   */
  private updateActiveSection() {
    if (!this.isLandingPage()) {
      return;
    }

    const probeY = Math.round(
      Math.min(Math.max(window.innerHeight * 0.32, 120), 280)
    );

    let current = this.navItems[0].fragment;
    let foundContaining = false;

    for (const item of this.navItems) {
      const element = document.getElementById(item.fragment);
      if (!element) {
        continue;
      }
      const rect = element.getBoundingClientRect();
      if (rect.top <= probeY && rect.bottom > probeY) {
        current = item.fragment;
        foundContaining = true;
        break;
      }
    }

    if (!foundContaining) {
      for (const item of this.navItems) {
        const element = document.getElementById(item.fragment);
        if (element && element.getBoundingClientRect().top <= probeY) {
          current = item.fragment;
        }
      }
    }

    const scrollBottom = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    if (docHeight - scrollBottom < 48) {
      current = this.navItems[this.navItems.length - 1].fragment;
    }

    this.activeSection = current;
  }
}
