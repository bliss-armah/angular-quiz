import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-herobar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './herobar.component.html',
  styleUrls: ['./herobar.component.css']
})
export class HerobarComponent {
  @Input() text!: string;
}
