import { Component } from '@angular/core';
import { APP_VERSION } from '../../config/version';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>© {{ currentYear }} KHLIFI Engineering Services v{{ appVersion }}</p>
    </footer>
  `,
  styles: [`
    .footer {
      padding: 24px 40px;
      font-size: 14px;
      color: var(--text-muted);
      font-family: Arial, sans-serif;
      text-align: center;
      background: var(--bg-black);
      border-top: 1px solid var(--border);
    }
    @media (max-width: 768px) {
      .footer {
        position: static;
        text-align: center;
        margin-top: 40px;
        padding: 20px;
        font-size: 12px;
      }
    }  `],
})
export class FooterComponent {
  appVersion = APP_VERSION;
  currentYear = new Date().getFullYear();
}
