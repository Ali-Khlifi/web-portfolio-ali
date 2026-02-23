import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ScrollNavigationService } from '../../services/scroll-navigation.service';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-page-indicators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-indicators.html',
  styleUrl: './page-indicators.css'
})
export class PageIndicatorsComponent implements OnInit, OnDestroy {
  pages: any[] = [];
  currentPageIndex = 0;
  isVisible = true;
  private destroy$ = new Subject<void>();

  constructor(
    private scrollNav: ScrollNavigationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pages = this.scrollNav.getPages();
    this.updateIndicators();
    
    // Écoute les changements de route avec NavigationEnd
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Utiliser directement l'URL de l'événement NavigationEnd
        this.detectPageFromUrl(event.url);
      });
  }

  private detectPageFromUrl(url: string) {
    // Supprimer les query params
    const cleanUrl = url.split('?')[0];
    
    // Pages de détails expérience
    if (/^\/experience\/[^/]+$/.test(cleanUrl)) {
      this.currentPageIndex = 1; // Index de /experience
      this.isVisible = false;
      return;
    }
    
    // Chercher le match exact
    const pageIndex = this.pages.findIndex(p => p.path === cleanUrl);
    
    if (pageIndex !== -1) {
      this.currentPageIndex = pageIndex;
      this.isVisible = true;
    } else {
      // Par défaut home
      this.currentPageIndex = 0;
      this.isVisible = true;
    }
  }

  private updateIndicators() {
    // Utiliser router.url une seule fois à l'init
    this.detectPageFromUrl(this.router.url);
  }

  goToPage(index: number) {
    this.scrollNav.navigateTo(index);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


