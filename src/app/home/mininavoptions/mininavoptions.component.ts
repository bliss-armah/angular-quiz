import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { clickedOutsideDirective } from 'src/app/shared/clickOustide.directive';

@Component({
  selector: 'app-mininavoptions',
  standalone: true,
  imports: [CommonModule,clickedOutsideDirective,RouterModule],
  templateUrl: './mininavoptions.component.html',
  styleUrl: './mininavoptions.component.css'
})
export class MininavoptionsComponent {
  @Input() showOptions: boolean = false;
}
