import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent {
  @Input() title: string = '';
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() description: string = '';
  @Input() uniqueId: string = '';
}
