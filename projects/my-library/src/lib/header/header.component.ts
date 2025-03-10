import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../button/button.component';
import type { User } from './user';

@Component({
  selector: 'storybook-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `<header>
  <div class="storybook-header">
    <div>
      <svg width="75" height="55" viewBox="0 0 75 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_53645_28849)">
      <path d="M48.3 52.6L48.9 52.7V54.7H27.2V52.7L27.8 52.6C29.6 52.4 31.6 52.1 31.6 47.8V9.3C31.6 5.9 30.2 4.6 27.8 4.6H27.4V2.5L44.4 0V47.8C44.4 51 45.8 52.3 48.3 52.6Z" fill="#333333"/>
      <path d="M15 2.60001L0 54.6H6.7L21.7 2.60001H15Z" fill="#E0291A"/>
      <path d="M68.3 2.60001L53.3 54.6H60L75 2.60001H68.3Z" fill="#E0291A"/>
      <path d="M52.6 7.80001H51.8V3.20001H50.2V2.60001H54.1V3.30001H52.5V7.80001H52.6Z" fill="#333333"/>
      <path d="M57.2 7.80001L55.6 3.40001C55.6 3.50001 55.6 3.60001 55.6 3.80001C55.6 4.00001 55.6 4.10001 55.6 4.30001C55.6 4.50001 55.6 4.70001 55.6 4.90001V7.80001H54.9V2.60001H56L57.5 6.80001L59 2.60001H60.1V7.80001H59.3V4.80001C59.3 4.60001 59.3 4.50001 59.3 4.30001C59.3 4.10001 59.3 4.00001 59.3 3.80001C59.3 3.60001 59.3 3.50001 59.3 3.40001L57.7 7.80001H57.2Z" fill="#333333"/>
      </g>
      <defs>
      <clipPath id="clip0_53645_28849">
      <rect width="75" height="54.6" fill="white"/>
      </clipPath>
      </defs>
      </svg>


      <h1>Learnship</h1>
    </div>
    <div>
      <div *ngIf="user">
        <span class="welcome">
          Welcome, <b>{{ user.name }}</b
          >!
        </span>
        <storybook-button
          *ngIf="user"
          size="small"
          (onClick)="onLogout.emit($event)"
          label="Log out"
        ></storybook-button>
      </div>
      <div *ngIf="!user">
        <storybook-button
          *ngIf="!user"
          size="small"
          class="margin-left"
          (onClick)="onLogin.emit($event)"
          label="Log in"
        ></storybook-button>
        <storybook-button
          *ngIf="!user"
          size="small"
          [primary]="true"
          class="margin-left"
          (onClick)="onCreateAccount.emit($event)"
          label="Sign up"
        ></storybook-button>
      </div>
    </div>
  </div>
</header>`,
  styleUrls: ['./header.css'],
})
export class HeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
