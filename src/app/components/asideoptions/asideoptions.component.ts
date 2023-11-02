import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-asideoptions',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './asideoptions.component.html',
  styleUrls: ['./asideoptions.component.css']
})
export class AsideoptionsComponent {
@Input() text!: string
@Input() imageUrl!: string
@Input() linkUrl!: string
}
