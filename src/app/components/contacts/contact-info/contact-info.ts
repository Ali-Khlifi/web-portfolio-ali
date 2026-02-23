import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.css',
})
export class ContactInfoComponent {
  @Input() email: string = '';
  @Input() linkedinUrl: string = '';
  @Input() linkedinName: string = '';
  @Input() cvFile: string = '';
}
