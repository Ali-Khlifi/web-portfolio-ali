import { Component } from '@angular/core';
import { APP_VERSION } from '../../config/version';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>© {{ currentYear }} Portfolio Ali v{{ appVersion }}</p>
    </footer>
  `,
  styles: [`
    .footer {
      position: fixed;
      bottom: 5px;
      right: auto;
      left: 40px;
      font-size: 14px;
      color: #5a5a5a;
      font-family: Arial, sans-serif;
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
