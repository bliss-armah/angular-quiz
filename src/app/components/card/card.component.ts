import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() bgColor: string = '#8080FF';
  @Input() imgUrl!: string;
  @Input() headText!: string;
  @Input() text!: string;
}
