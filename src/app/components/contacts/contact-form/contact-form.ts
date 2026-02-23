import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../../services/email.service';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactFormComponent {
  form: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  successMessage = false;
  errorMessage = false;
  isLoading = false;

  constructor(private emailService: EmailService, private cdr: ChangeDetectorRef) {}

  submitForm() {
    if (this.isFormValid()) {
      this.isLoading = true;
      this.errorMessage = false;
      this.cdr.markForCheck();

      this.emailService.sendContactEmail(this.form).then(
        (response) => {
          console.log('Email envoyé:', response);
          
          // Réinitialise immédiatement le formulaire et les champs
          this.form = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
          this.submitted = false;
          this.isLoading = false;
          
          // Force la détection de changement
          this.cdr.markForCheck();
          
          // Affiche le message de succès
          this.successMessage = true;
          
          // Fait disparaître le message après 3 secondes
          setTimeout(() => {
            this.successMessage = false;
            this.cdr.markForCheck();
          }, 3000);
        },
        (error) => {
          console.error('Erreur lors de l\'envoi:', error);
          this.errorMessage = true;
          this.isLoading = false;
          this.submitted = true;
          
          // Force la détection de changement
          this.cdr.markForCheck();
          
          // Fait disparaître le message d'erreur après 5 secondes
          setTimeout(() => {
            this.errorMessage = false;
            this.cdr.markForCheck();
          }, 5000);
        }
      );
    } else {
      this.submitted = true;
    }
  }

  isFormValid(): boolean {
    return this.form.name.trim() !== '' &&
           this.form.email.trim() !== '' &&
           this.form.subject.trim() !== '' &&
           this.form.message.trim() !== '';
  }

  resetForm() {
    this.form = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.submitted = false;
    this.successMessage = false;
    this.errorMessage = false;
  }
}
