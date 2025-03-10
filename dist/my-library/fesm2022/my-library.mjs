import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class ButtonComponent {
    /** Is this the principal call to action on the page? */
    primary = false;
    /** What background color to use */
    backgroundColor;
    /** How large should the button be? */
    size = 'medium';
    /**
     * Button contents
     *
     * @required
     */
    label = 'Button';
    /** Optional click handler */
    onClick = new EventEmitter();
    get classes() {
        const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
        return ['storybook-button', `storybook-button--${this.size}`, mode];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: ButtonComponent, isStandalone: true, selector: "storybook-button", inputs: { primary: "primary", backgroundColor: "backgroundColor", size: "size", label: "label" }, outputs: { onClick: "onClick" }, ngImport: i0, template: ` <button
  type="button"
  (click)="onClick.emit($event)"
  [ngClass]="classes"
  [ngStyle]="{ 'background-color': backgroundColor }"
>
  {{ label }}
</button>`, isInline: true, styles: [".storybook-button{display:inline-block;cursor:pointer;border:0;border-radius:3em;font-weight:700;line-height:1;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.storybook-button--primary{background-color:#555ab9;color:#fff}.storybook-button--secondary{box-shadow:#00000026 0 0 0 1px inset;background-color:transparent;color:#333}.storybook-button--small{padding:10px 16px;font-size:12px}.storybook-button--medium{padding:11px 20px;font-size:14px}.storybook-button--large{padding:12px 24px;font-size:16px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'storybook-button', standalone: true, imports: [CommonModule], template: ` <button
  type="button"
  (click)="onClick.emit($event)"
  [ngClass]="classes"
  [ngStyle]="{ 'background-color': backgroundColor }"
>
  {{ label }}
</button>`, styles: [".storybook-button{display:inline-block;cursor:pointer;border:0;border-radius:3em;font-weight:700;line-height:1;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.storybook-button--primary{background-color:#555ab9;color:#fff}.storybook-button--secondary{box-shadow:#00000026 0 0 0 1px inset;background-color:transparent;color:#333}.storybook-button--small{padding:10px 16px;font-size:12px}.storybook-button--medium{padding:11px 20px;font-size:14px}.storybook-button--large{padding:12px 24px;font-size:16px}\n"] }]
        }], propDecorators: { primary: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], size: [{
                type: Input
            }], label: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });

class HeaderComponent {
    user = null;
    onLogin = new EventEmitter();
    onLogout = new EventEmitter();
    onCreateAccount = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: HeaderComponent, isStandalone: true, selector: "storybook-header", inputs: { user: "user" }, outputs: { onLogin: "onLogin", onLogout: "onLogout", onCreateAccount: "onCreateAccount" }, ngImport: i0, template: `<header>
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
</header>`, isInline: true, styles: [".storybook-header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(0,0,0,.1);padding:15px 20px;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.storybook-header svg{display:inline-block;vertical-align:top;height:32px}.storybook-header h1{display:inline-block;vertical-align:top;margin:6px 0 6px 10px;font-weight:700;font-size:20px;line-height:1}.storybook-header button+button{margin-left:10px}.storybook-header .welcome{margin-right:10px;color:#333;font-size:14px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ButtonComponent, selector: "storybook-button", inputs: ["primary", "backgroundColor", "size", "label"], outputs: ["onClick"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'storybook-header', standalone: true, imports: [CommonModule, ButtonComponent], template: `<header>
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
</header>`, styles: [".storybook-header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(0,0,0,.1);padding:15px 20px;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.storybook-header svg{display:inline-block;vertical-align:top;height:32px}.storybook-header h1{display:inline-block;vertical-align:top;margin:6px 0 6px 10px;font-weight:700;font-size:20px;line-height:1}.storybook-header button+button{margin-left:10px}.storybook-header .welcome{margin-right:10px;color:#333;font-size:14px}\n"] }]
        }], propDecorators: { user: [{
                type: Input
            }], onLogin: [{
                type: Output
            }], onLogout: [{
                type: Output
            }], onCreateAccount: [{
                type: Output
            }] } });

class FooterComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: FooterComponent, isStandalone: true, selector: "lib-footer", ngImport: i0, template: "<p>footer works!</p>\n", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-footer', imports: [], template: "<p>footer works!</p>\n" }]
        }] });

class CardComponent {
    title = 'Card Title';
    constructor() {
    }
    getCardTitle() {
        console.log('getCardTitle() :', this.title);
        return this.title;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: CardComponent, isStandalone: true, selector: "lib-card", inputs: { title: "title" }, ngImport: i0, template: "<div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n        <h3>{{ title }}</h3>\n        </div>\n        <div class=\"card-body\">\n            <p>Card body</p>\n            <button (click)=\"getCardTitle()\" class=\"storybook-button\">Click me</button>\n        </div>\n        <div class=\"card-footer\">\n            <h4>Card Footer</h4>\n        </div>\n    </div>\n</div>", styles: [".card .card-header{background-color:#f5f5f5;padding:10px}.card .card-body{padding:10px}.card .card-footer{background-color:#f5f5f5;padding:10px}.storybook-button{display:inline-block;cursor:pointer;border:0;border-radius:3em;font-weight:700;line-height:1;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.storybook-button--primary{background-color:#555ab9;color:#fff}.storybook-button--secondary{box-shadow:#00000026 0 0 0 1px inset;background-color:transparent;color:#333}.storybook-button--small{padding:10px 16px;font-size:12px}.storybook-button--medium{padding:11px 20px;font-size:14px}.storybook-button--large{padding:12px 24px;font-size:16px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-card', standalone: true, template: "<div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n        <h3>{{ title }}</h3>\n        </div>\n        <div class=\"card-body\">\n            <p>Card body</p>\n            <button (click)=\"getCardTitle()\" class=\"storybook-button\">Click me</button>\n        </div>\n        <div class=\"card-footer\">\n            <h4>Card Footer</h4>\n        </div>\n    </div>\n</div>", styles: [".card .card-header{background-color:#f5f5f5;padding:10px}.card .card-body{padding:10px}.card .card-footer{background-color:#f5f5f5;padding:10px}.storybook-button{display:inline-block;cursor:pointer;border:0;border-radius:3em;font-weight:700;line-height:1;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.storybook-button--primary{background-color:#555ab9;color:#fff}.storybook-button--secondary{box-shadow:#00000026 0 0 0 1px inset;background-color:transparent;color:#333}.storybook-button--small{padding:10px 16px;font-size:12px}.storybook-button--medium{padding:11px 20px;font-size:14px}.storybook-button--large{padding:12px 24px;font-size:16px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { title: [{
                type: Input
            }] } });

class DropdownComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: DropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: DropdownComponent, isStandalone: true, selector: "lib-dropdown", ngImport: i0, template: "<p>dropdown works!</p>\n", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-dropdown', standalone: true, template: "<p>dropdown works!</p>\n" }]
        }] });

/*
 * Public API Surface of my-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, CardComponent, DropdownComponent, FooterComponent, HeaderComponent };
//# sourceMappingURL=my-library.mjs.map
