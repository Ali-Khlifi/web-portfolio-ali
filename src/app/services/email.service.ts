import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // Configuration EmailJS - Clés de configuration
  private SERVICE_ID = 'service_d5xreja';
  private TEMPLATE_ID = 'template_tft04ew';
  private PUBLIC_KEY = 'CHftj17xDX7KmFCb2';

  constructor() {
    // Initialiser EmailJS avec la clé publique
    emailjs.init(this.PUBLIC_KEY);
  }

  /**
   * Envoie un email de contact
   * @param data Les données du formulaire
   * @returns Promise<Response>
   */
  sendContactEmail(data: EmailData): Promise<any> {
    const templateParams = {
      to_email: 'alikhlifi.kh@gmail.com',
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message
    };

    return emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams
    );
  }
}
