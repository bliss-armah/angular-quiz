import { DataShareService } from './../../../shared/dataShare.service';
import { DataStorageService } from 'src/app/shared/dataStorage.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AllQuizQ, AllQuizQnP, AnswerQuestion } from 'src/app/types';
import { FormsModule, NgForm } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PaginationComponent,
    NgxPaginationModule,
    RouterModule,
    LoaderComponent
  ],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  questions!: AllQuizQnP;
  allQuestions!: AllQuizQ;
  text!: string;
  selectedOptions: AnswerQuestion = {
    _id: this.route.snapshot.params['id'],
    answers: [],
  };
  quizId: string = '';
  page: number = 1;
  submit = false;
  pageNo = 1;
  title = 'pagination';
  count = 0;
  tableSize = 1;
  tableSizes = [5, 10, 15, 20];
  data: any;
  isLoading = false;
  selectedAnswers: { [questionId: string]: string } = {};


  constructor(
    private dataShareService: DataShareService,
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.quizId = params['id'];
    });
    this.fetchQ(this.quizId);
    this.dataShareService.updateShowHeader(true);
  }

  fetchQ(id: string) {
    this.isLoading = true;
    return this.dataStorageService.fetchQ(id).subscribe((data) => {
      this.isLoading = false;
      this.allQuestions = data;
    });
  }

  getNextQuestion() {
    if (this.pageNo !== this.allQuestions.questions.length) {
      this.submit = false;
      this.pageNo++;
      console.log(
        'getNextQuestion',
        this.pageNo,
        this.allQuestions.questions.length - 1
      );
    } else {
      this.handleSubmission();
      console.log('object');
      this.router.navigate(['quizzes', this.quizId, 'solutions']);
    }
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

  getSelectedAnswer(questionId: string): string | undefined {
    return this.selectedAnswers[questionId];
  }

  handleSubmission() {
    return this.dataStorageService
      .sendAnswers(this.selectedOptions)
      .subscribe((data) => {
        this.data = data;
        this.dataShareService.setData(this.data);
      });
  }

  handleButtonLabelChange() {
    if (this.pageNo === this.allQuestions.questions.length) {
      return 'Submit';
    }
    return 'Next';
  }

  onTableDataChanged(event: any) {
    this.pageNo = event;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
