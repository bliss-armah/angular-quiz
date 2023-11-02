import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../home/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';
import { CardComponent } from '../components/card/card.component';
import { ColumnComponent } from '../components/graphs/bar/bar.component';
import { PieComponent } from '../components/graphs/pie/pie.component';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { HerobarComponent } from '../components/herobar/herobar.component';
import { RouterModule } from '@angular/router';

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
    RouterModule
  ],
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css'],
})
export class ProfilepageComponent {
 
}
