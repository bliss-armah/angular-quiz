import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Quiz } from '../quiz.model';
import { DataStorageService } from 'src/app/shared/dataStorage.service';
import { FooterComponent } from 'src/app/home/footer/footer.component';
import { HerobarComponent } from 'src/app/components/herobar/herobar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-questionspage',
  standalone: true,
  imports: [CommonModule,FooterComponent,HerobarComponent,RouterModule],
  templateUrl: './questionspage.component.html',
  styleUrls: ['./questionspage.component.css']
})
export class QuestionspageComponent {

  quizzes:Quiz[] = [];
  subscription!: Subscription


  constructor ( private dataStorageService: DataStorageService){  }

  ngOnInit(): void {
    this.subscription = this.dataStorageService.fetchQuizzes().subscribe((quizzes)=>{
      this.quizzes = quizzes.quiz
      console.log(this.quizzes);
    })
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
