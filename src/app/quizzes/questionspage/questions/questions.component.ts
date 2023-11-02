import { DataStorageService } from 'src/app/shared/dataStorage.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AllQuizQ, AllQuizQnP, AnswerQuestion, QuizQuestions } from 'src/app/types';
import { FormsModule, NgForm } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { Quiz } from '../../quiz.model';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  questions!: AllQuizQnP;
  allQuestions!: AllQuizQ;
  text!: string;
  selectedOptions: AnswerQuestion = {
    _id: this.route.snapshot.params['id'],
    answers: [],
  };
  quizId: string = '';
  page: number = 1;

  constructor(
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.quizId = params['id'];
    });
    this.fetchQuiz(this.quizId, this.page);
    this.fetchQ(this.quizId);
  }


  fetchQuiz(id: string, page: number) {
    return this.dataStorageService
      .fetchQuiz(id, page)
      .subscribe((data) => {
        this.questions = data;
      });
  }


  fetchQ(id: string) {
    return this.dataStorageService
      .fetchQ(id)
      .subscribe((data) => {
        this.allQuestions = data;
      });
  }


  handleOptionChange(questionId: string, option: string) {
    const existingAnswer = this.selectedOptions?.answers.find(
      (answer) => answer._id === questionId
    );

    if (existingAnswer) {
      this.selectedOptions.answers = this.selectedOptions.answers.map(
        (answer) =>
          answer._id !== questionId ? { ...answer, answer: option } : answer
      );
    } else {
      this.selectedOptions.answers.push({
        _id: questionId,
        answer: option,
      });
    }
  }

  increasePage() {
    this.page++;
    this.fetchQuiz(this.quizId, this.page);
    console.log(this.page, this.quizId);
  }

  decreasePage() {
    if (this.page > 1) {
      this.page--;
      this.fetchQuiz(this.quizId, this.page);

      console.log(this.page, this.quizId);
    }
    console.log(this.page, this.quizId);

    return this.page;
  }

  handleSubmission() {
    console.log(this.selectedOptions);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
