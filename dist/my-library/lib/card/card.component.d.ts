import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CardComponent {
    title: string;
    cardClick: EventEmitter<string>;
    constructor();
    getCardTitle(): string;
    onCardClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "lib-card", never, { "title": { "alias": "title"; "required": false; }; }, { "cardClick": "cardClick"; }, never, never, true, never>;
}
