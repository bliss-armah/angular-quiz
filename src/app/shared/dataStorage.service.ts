import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,  } from 'rxjs';
import { Quizzes } from '../quizzes/quiz.model';
import {  AllQuizQnP,  QuizQuestionsP } from '../types';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}
  
  total: any = []

  sendAnswers(answers: any) {
    return this.http
      .post(
        'https://user-auth-server.onrender.com/api/v1/quiz/totalMarks',
        answers
      ).pipe(
        map((solutions) => {
          return solutions;
        })
      );
  }

  fetchQuizzes() {
    return this.http
      .get<Quizzes>('https://user-auth-server.onrender.com/api/v1/quiz')
      .pipe(
        map((quiz) => {
          return quiz;
        })
      );
  }

  fetchQuiz(id: string,page:number) {
    return this.http
      .get<AllQuizQnP>( `https://user-auth-server.onrender.com/api/v1/quiz/questions/${id}?page=${page}`)
      .pipe(
        map((quiz) => {

          return quiz;
        })
      );
  }

fetchQ(id: string) {
  return this.http
      .get<QuizQuestionsP>( `https://user-auth-server.onrender.com/api/v1/quiz/question/${id}`)
      .pipe(
        map((quiz) => {
          console.log('',quiz);
          return quiz.quiz;
        })
      );
  }



}