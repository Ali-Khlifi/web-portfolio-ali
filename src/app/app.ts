import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { PageIndicatorsComponent } from './components/page-indicators/page-indicators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollNavigationService } from './services/scroll-navigation.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PageIndicatorsComponent, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'web-Ali-KHLIFI-angular';

  constructor(
    private scrollNav: ScrollNavigationService,
    private router: Router
  ) {}

  ngOnInit() {
    // Initialize scroll navigation listener
    this.scrollNav.initScrollListener();

    // Update page index on navigation and check scroll state
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollNav.updateCurrentPageIndex();
      });
  }

  onSearchInput(searchValue: string) {
    console.log('Search input:', searchValue);
  }
}
