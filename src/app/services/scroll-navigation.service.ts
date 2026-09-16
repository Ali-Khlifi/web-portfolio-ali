import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollNavigationService {
  private pages = [
    { path: '/home', name: 'Accueil' },
    { path: '/experience', name: 'Expérience professionnelle' },
    { path: '/projets', name: 'Projets' },
    { path: '/contacts', name: 'Contact' }
  ];

  private currentPageIndex = 0;
  private scrollThreshold = 0.7; // 70% du scroll pour trigger navigation
  private isNavigating = false;
  private navigationCooldown = 1200; // ms entre chaque navigation (augment pour plus de fluidité)
  private scrollEnabled = true; // Contrôle si le scroll auto-nav est actif
  private accumulatedScroll = 0; // Track scroll amount before navigating
  private scrollSensitivity = 3; // Nombre de wheel events avant navigation

  constructor(private router: Router) {
    this.updateCurrentPageIndex();
    this.updateScrollState();
  }

  /**
   * Ancienne navigation page par page au scroll.
   * Désactivée : le site est désormais une page unique à défilement vertical.
   */
  initScrollListener() {
    return;
  }

  /**
   * Gère le scroll fluide et continu à travers toutes les pages
   * Navigation intelligente basée sur la direction du scroll
   */
  private handleScroll(event: WheelEvent) {
    // Ne pas naviguer si déjà en train de naviguer
    if (this.isNavigating || !this.scrollEnabled) return;

    const isScrollingDown = event.deltaY > 0;
    
    // Accumule le scroll pour déterminer quand naviguer
    this.accumulatedScroll += Math.abs(event.deltaY);
    
    // Navigation fluide: nécessite un scroll plus important avant de changer de page
    if (this.accumulatedScroll > 300) {
      this.accumulatedScroll = 0;
      
      if (isScrollingDown && this.currentPageIndex < this.pages.length - 1) {
        this.goToNextPage();
      } else if (!isScrollingDown && this.currentPageIndex > 0) {
        this.goToPreviousPage();
      }
    }
  }

  /**
   * Navigation vers la page suivante
   */
  goToNextPage() {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.navigateTo(this.currentPageIndex + 1);
    }
  }

  /**
   * Navigation vers la page précédente
   */
  goToPreviousPage() {
    if (this.currentPageIndex > 0) {
      this.navigateTo(this.currentPageIndex - 1);
    }
  }

  /**
   * Navigation vers une page spécifique
   */
  navigateTo(pageIndex: number) {
    this.isNavigating = true;
    this.currentPageIndex = pageIndex;
    this.router.navigate([this.pages[pageIndex].path]);

    // Reset cooldown
    setTimeout(() => {
      this.isNavigating = false;
    }, this.navigationCooldown);
  }

  /**
   * Retourne l'index de la page actuelle
   */
  getCurrentPageIndex(): number {
    return this.currentPageIndex;
  }

  /**
   * Retourne la liste des pages
   */
  getPages() {
    return this.pages;
  }

  /**
   * Met à jour l'index basé sur la route actuelle
   */
  updateCurrentPageIndex() {
    const currentUrl = this.router.url;
    this.currentPageIndex = this.pages.findIndex(p => p.path === currentUrl);
    if (this.currentPageIndex === -1) {
      this.currentPageIndex = 0; // Par défaut, home
    }
    this.updateScrollState();
  }

  /**
   * Met à jour l'état du scroll basé sur la route actuelle
   * Désactive le scroll sur les pages de détails
   */
  private updateScrollState() {
    const currentUrl = this.router.url;
    // Désactiver le scroll sur les pages de détails (ex: /experience/coexya-mobilite-aix)
    // Match /experience/ suivi de n'importe quel caractère (sauf /)
    this.scrollEnabled = !/experience\/[^/]+$/.test(currentUrl);
  }

  /**
   * Activeile/désactile manuellement le scroll
   */
  setScrollEnabled(enabled: boolean) {
    this.scrollEnabled = enabled;
  }
}

