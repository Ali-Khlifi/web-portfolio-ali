import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './contact-info/contact-info';
import { ContactFormComponent } from './contact-form/contact-form';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, ContactInfoComponent, ContactFormComponent],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class ContactsComponent {
  // Informations de contact
  email = 'alikhlifi.kh@gmail.com';
  linkedinUrl = 'https://www.linkedin.com/in/ali-k-77b60a148/';
  linkedinName = 'Ali KHLIFI';
  cvFile = 'assets/files/CV Ali KHLIFI 08-2026.pdf';
}
