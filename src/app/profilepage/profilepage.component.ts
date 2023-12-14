import { DataStorageService } from 'src/app/shared/dataStorage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../home/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';
import { CardComponent } from '../components/card/card.component';
import { ColumnComponent } from '../components/graphs/bar/bar.component';
import { PieComponent } from '../components/graphs/pie/pie.component';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { HerobarComponent } from '../components/herobar/herobar.component';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Quiz } from '../quizzes/quiz.model';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HerobarComponent,
    FooterComponent,
    CardComponent,
    ColumnComponent,
    PieComponent,
    CalendarComponent,
    RouterModule,
    LoaderComponent
  ],
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css'],
})
export class ProfilepageComponent implements OnInit, OnDestroy {

  quizzes:Quiz[] = [];
  subscription!: Subscription
  isLoading= false

  constructor(private dataStorageService: DataStorageService) {}
 
  ngOnInit(): void {
    this.isLoading = true;

    // Use observer object to handle next, error, and complete
    this.subscription = this.dataStorageService.fetchQuizzes().subscribe({
      next: (quizzes) => {
        this.quizzes = quizzes.quiz;
        console.log(this.quizzes);
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      },
      complete: () => {
        // Handle any logic you need when the observable completes
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
