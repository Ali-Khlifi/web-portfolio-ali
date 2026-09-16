import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmailService } from '../../../services/email.service';
import {
  PrestationDraft,
  PrestationDraftService,
} from '../../../services/prestation-draft.service';

interface ContactForm {
  firstName: string;
  name: string;
  email: string;
  company: string;
  website: string;
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
export class ContactFormComponent implements OnInit, OnDestroy {
  form: ContactForm = this.emptyForm();

  submitted = false;
  successMessage = false;
  errorMessage = false;
  isLoading = false;
  prestationSummary: PrestationDraft | null = null;

  private draftSub?: Subscription;
  private summarySub?: Subscription;

  constructor(
    private emailService: EmailService,
    private draftService: PrestationDraftService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.applyDraft(this.draftService.consumeDraft());
    this.draftSub = this.draftService.draftReady$.subscribe((draft) => {
      this.applyDraft(draft);
      this.draftService.consumeDraft();
    });
    this.summarySub = this.draftService.summary$.subscribe((summary) => {
      this.prestationSummary = summary;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this.draftSub?.unsubscribe();
    this.summarySub?.unsubscribe();
  }

  clearPrestationSummary() {
    this.draftService.clearSummary();
    this.form = {
      ...this.form,
      subject: '',
      message: '',
    };
    this.submitted = false;
    this.cdr.markForCheck();
  }

  private emptyForm(): ContactForm {
    return {
      firstName: '',
      name: '',
      email: '',
      company: '',
      website: '',
      subject: '',
      message: '',
    };
  }

  private applyDraft(draft: PrestationDraft | null) {
    if (!draft) {
      return;
    }

    this.form = {
      ...this.form,
      subject: draft.subject,
      message: draft.message,
    };
    this.submitted = false;
    this.successMessage = false;
    this.errorMessage = false;
    this.cdr.markForCheck();
  }

  submitForm() {
    if (this.isFormValid()) {
      this.isLoading = true;
      this.errorMessage = false;
      this.cdr.markForCheck();

      this.emailService.sendContactEmail(this.form).then(
        () => {
          this.form = this.emptyForm();
          this.draftService.clearSummary();
          this.submitted = false;
          this.isLoading = false;
          this.cdr.markForCheck();

          this.successMessage = true;

          setTimeout(() => {
            this.successMessage = false;
            this.cdr.markForCheck();
          }, 3000);
        },
        (error) => {
          console.error("Erreur lors de l'envoi:", error);
          this.errorMessage = true;
          this.isLoading = false;
          this.submitted = true;
          this.cdr.markForCheck();

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
    return (
      this.form.firstName.trim() !== '' &&
      this.form.name.trim() !== '' &&
      this.form.email.trim() !== '' &&
      this.form.subject.trim() !== '' &&
      this.form.message.trim() !== ''
    );
  }

  resetForm() {
    this.form = this.emptyForm();
    this.submitted = false;
    this.successMessage = false;
    this.errorMessage = false;
  }
}
