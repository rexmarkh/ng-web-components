import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    /** Is this the principal call to action on the page? */
    primary: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size: 'small' | 'medium' | 'large';
    /**
     * Button contents
     *
     * @required
     */
    label: string;
    /** Optional click handler */
    onClick: EventEmitter<Event>;
    get classes(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "storybook-button", never, { "primary": { "alias": "primary"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "size": { "alias": "size"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, { "onClick": "onClick"; }, never, never, true, never>;
}
