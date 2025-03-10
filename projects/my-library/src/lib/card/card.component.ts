import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'lib-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() title: string = 'Card Title';
  @Output() cardClick = new EventEmitter<string>(); // ✅ Event Emitter

  constructor() {}

  public getCardTitle(): string {
    console.log('getCardTitle() :', this.title);
    return this.title;
  }

  public onCardClick(): void {
    console.log('Card Clicked!');
    this.cardClick.emit(this.title); // ✅ Emit event with title as payload
  }
}

