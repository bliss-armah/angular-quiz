import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroservice',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './heroservice.component.html',
  styleUrls: ['./heroservice.component.css']
})
export class HeroserviceComponent {

  constructor( private router: Router) {}

  onGoToQuiz() {
    this.router.navigate(['/quizzes']);
  }

}
