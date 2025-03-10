import { ApplicationRef, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { createApplication } from "@angular/platform-browser";
import { appConfig } from './app/app.config';

import { HeaderComponent, FooterComponent, CardComponent, DropdownComponent, ButtonComponent } from 'my-library';


(async () => {
  const app: ApplicationRef = await createApplication(appConfig);
  const injector: Injector = app.injector;

  const components = [
    { selector: "ls-header", component: HeaderComponent },
    { selector: "ls-footer", component: FooterComponent },
    { selector: "ls-card", component: CardComponent },
    { selector: "ls-dropdown", component: DropdownComponent },
    { selector: "ls-button", component: ButtonComponent },
  ];

  for (const { selector, component } of components) {
    const element = createCustomElement(component, { injector });
    customElements.define(selector, element);
  }
})();
// Export named Web Components for TypeScript imports
export { HeaderComponent, FooterComponent, CardComponent, DropdownComponent, ButtonComponent };
