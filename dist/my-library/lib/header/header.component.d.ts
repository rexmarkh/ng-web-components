import { EventEmitter } from '@angular/core';
import type { User } from './user';
import * as i0 from "@angular/core";
export declare class HeaderComponent {
    user: User | null;
    onLogin: EventEmitter<Event>;
    onLogout: EventEmitter<Event>;
    onCreateAccount: EventEmitter<Event>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "storybook-header", never, { "user": { "alias": "user"; "required": false; }; }, { "onLogin": "onLogin"; "onLogout": "onLogout"; "onCreateAccount": "onCreateAccount"; }, never, never, true, never>;
}
