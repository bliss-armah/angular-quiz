import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Quiz } from '../quiz.model';
import { DataStorageService } from 'src/app/shared/dataStorage.service';
import { FooterComponent } from 'src/app/home/footer/footer.component';
import { HerobarComponent } from 'src/app/components/herobar/herobar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from 'src/app/components/search/search.component';

@Component({
  selector: 'app-questionspage',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    HerobarComponent,
    RouterModule,
    SearchComponent,
  ],
  templateUrl: './questionspage.component.html',
  styleUrls: ['./questionspage.component.css'],
})
export class QuestionspageComponent implements OnInit, OnDestroy {
  quizzes: Quiz[] = [];
  subscription!: Subscription;
  selectedSubjects: string[] = [];
  

  constructor(private dataStorageService: DataStorageService) {}
  ngOnInit(): void {
    this.dataStorageService.fetchQuizzes('');
    this.subscription = this.dataStorageService.data$.subscribe((quizzes) => {
      this.quizzes = quizzes?.quiz;
    });
  }

  getQuizBySubject(subject: string): void {
    if (this.selectedSubjects.includes(subject)) {
      this.selectedSubjects = this.selectedSubjects.filter(
        (item) => item !== subject
      );
    } else {
      this.selectedSubjects.push(subject);
    }
    this.fetchQuizzesBySubjects();
  }

  fetchQuizzesBySubjects(): void {
    const subjects = this.selectedSubjects.join(',');
    this.dataStorageService.fetchQuizzes(subjects);
    this.subscription = this.dataStorageService.data$.subscribe((quizzes) => {
      this.quizzes = quizzes?.quiz;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
