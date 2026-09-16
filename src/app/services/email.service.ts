import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface EmailData {
  firstName: string;
  name: string;
  email: string;
  company: string;
  website: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private SERVICE_ID = 'service_d5xreja';
  private TEMPLATE_ID = 'template_tft04ew';
  private PUBLIC_KEY = 'CHftj17xDX7KmFCb2';

  constructor() {
    emailjs.init(this.PUBLIC_KEY);
  }

  sendContactEmail(data: EmailData): Promise<any> {
    const fullName = `${data.firstName.trim()} ${data.name.trim()}`.trim();
    const extras: string[] = [];
    if (data.company.trim()) {
      extras.push(`Raison sociale : ${data.company.trim()}`);
    }
    if (data.website.trim()) {
      extras.push(`Site web : ${data.website.trim()}`);
    }

    const messageBody = extras.length
      ? `${extras.join('\n')}\n\n${data.message}`
      : data.message;

    const templateParams = {
      to_email: 'alikhlifi.kh@gmail.com',
      from_name: fullName,
      from_email: data.email,
      first_name: data.firstName.trim(),
      last_name: data.name.trim(),
      company: data.company.trim() || '—',
      website: data.website.trim() || '—',
      subject: data.subject,
      message: messageBody,
    };

    return emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams);
  }
}
