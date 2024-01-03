import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() Title: string = '';
  @Input() Description: string = '';
  @Input() imagePath: string = '';

  background = ''
}
 