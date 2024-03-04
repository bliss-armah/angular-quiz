import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, map,  } from 'rxjs';
import { Quizzes } from '../quizzes/quiz.model';
import {  AllQuizQnP,  QuizQuestionsP } from '../types';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}
  
  total: any = []
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();


  sendAnswers(answers: any) {
    return this.http
      .post(
        'https://user-auth-server.onrender.com/api/v1/quiz/totalMarks',
        answers
      ).pipe(
        map((solutions) => {
          return solutions;
        })
      )
  }

  fetchQuizzes(subject: string) {
    this.http
      .get<Quizzes>(`https://user-auth-server.onrender.com/api/v1/quiz?subject=${subject}`)
      .subscribe({
        next: (data) => {
          this.dataSubject.next(data);
        },
        error: (error) => {
          console.error('Error Fetching Data:', error); // Log any errors
        }
      });
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
          return quiz.quiz;
        })
      );
  }

}