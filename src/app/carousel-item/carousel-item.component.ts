import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrl: './carousel-item.component.css'
})
export class CarouselItemComponent {
  @Input() Title: string = '';
  @Input() Description: string = '';
  @Input() imagePath: string = '';
  @Input() altText: string = '';
}