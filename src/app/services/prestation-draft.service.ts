import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface PrestationDraft {
  service: string;
  context: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class PrestationDraftService {
  private draft: PrestationDraft | null = null;
  private readonly draftReady = new Subject<PrestationDraft>();
  private readonly summary = new BehaviorSubject<PrestationDraft | null>(null);

  readonly draftReady$ = this.draftReady.asObservable();
  /** Récap visible côté Contact tant que la simulation n’est pas effacée. */
  readonly summary$ = this.summary.asObservable();

  setDraft(service: string, context: string) {
    this.draft = {
      service,
      context,
      subject: `Demande de prestation — ${service}`,
      message: [
        'Bonjour,',
        '',
        'Je souhaite échanger sur une prestation :',
        `• Offre : ${service}`,
        `• Contexte : ${context}`,
        '',
        'Pouvez-vous me recontacter pour en discuter ?',
        '',
        'Cordialement,',
      ].join('\n'),
    };
    this.summary.next(this.draft);
    this.draftReady.next(this.draft);
  }

  consumeDraft(): PrestationDraft | null {
    const current = this.draft;
    this.draft = null;
    return current;
  }

  clearSummary() {
    this.summary.next(null);
  }
}
