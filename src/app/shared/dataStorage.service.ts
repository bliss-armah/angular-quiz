import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { Quiz, Quizzes } from '../quizzes/quiz.model';
import { AllQuizQ, AllQuizQnP, FilterQuestionProps, QuizQuestions, QuizQuestionsP } from '../types';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}
  


  fetchQuizzes() {
    return this.http
      .get<Quizzes>('https://user-auth-server.onrender.com/api/v1/quiz')
      .pipe(
        map((recipes) => {
          return recipes;
        })
      );
  }

  fetchQuiz(id: string,page:number) {
    return this.http
      .get<AllQuizQnP>( `https://user-auth-server.onrender.com/api/v1/quiz/questions/${id}?page=${page}`)
      .pipe(
        map((recipes) => {

          return recipes;
        })
      );
  }

fetchQ(id: string) {
  return this.http
      .get<QuizQuestionsP>( `https://user-auth-server.onrender.com/api/v1/quiz/question/${id}`)
      .pipe(
        map((recipes) => {
          console.log('',recipes);

          return recipes.quiz;
        })
      );
  }



}