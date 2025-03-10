import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() title: string = 'Card Title';

  constructor() {
  }

  public getCardTitle(): string {
    console.log('getCardTitle() :', this.title);
    return this.title;
  }
}
