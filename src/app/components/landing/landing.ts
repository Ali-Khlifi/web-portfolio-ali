import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home';
import { ExperienceComponent } from '../experience/experience';
import { ExperiencesComponent } from '../experiences/experiences';
import { ServicesComponent } from '../services/services';
import { SimulateurComponent } from '../simulateur/simulateur';
import { ContactsComponent } from '../contacts/contacts';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HomeComponent,
    ExperienceComponent,
    ExperiencesComponent,
    ServicesComponent,
    SimulateurComponent,
    ContactsComponent,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class LandingComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (!fragment) {
        return;
      }
      setTimeout(() => {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    });
  }
}
