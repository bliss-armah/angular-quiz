import { Component, OnInit } from '@angular/core';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDate,
  getDay,
  isEqual,
  lastDayOfMonth,
  parse,
  previousDay,
  previousFriday,
  previousSunday,
  startOfMonth,
  startOfToday,
  sub,
  toDate,
} from 'date-fns';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class CalendarComponent implements OnInit {
  today = startOfToday();
  currentMonth!: string;
  currentMonthName!: string;
  days!: Date[];
  daysOfTheWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  previousDays = 0;

  

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentMonthName = format(this.today, 'MMMM');
    this.currentMonth = format(this.today, 'MMM-yyyy');
    this.days = this.generateCalendarDays(this.today);
  }

  previousMonth() {
    const firstDayNextMonth = add(
      parse(this.currentMonth, 'MMM-yyyy', this.today),
      { months: -1 }
    );
    this.currentMonth = format(firstDayNextMonth, 'MMM-yyyy');
    this.today = toDate(firstDayNextMonth);
    this.currentMonthName = format(firstDayNextMonth, 'MMMM');
    this.days = this.generateCalendarDays(this.today);
  }

  nextMonth() {
    const firstDayNextMonth = add(
      parse(this.currentMonth, 'MMM-yyyy', this.today),
      { months: 1 }
    );
    this.currentMonth = format(firstDayNextMonth, 'MMM-yyyy');
    this.today = toDate(firstDayNextMonth);
    this.currentMonthName = format(firstDayNextMonth, 'MMMM');
    this.days = this.generateCalendarDays(this.today);
  }

  private generateCalendarDays(day: Date): Date[] {
    const days = eachDayOfInterval({
      start: startOfMonth(day),
      end: endOfMonth(day),
    });
    const firstDay= days[0]
    console.log('firstday',firstDay);
    const posDay = this.daysOfTheWeek.indexOf(firstDay.toDateString().split(' ')[0]);
    console.log('firstPositionDay',posDay);

    const lastDaysOfPreviousMonth = eachDayOfInterval({
      start: previousSunday(firstDay),
      end: firstDay,
    });
    lastDaysOfPreviousMonth.pop();
    this.previousDays = posDay;
    if(posDay) {
      return [...lastDaysOfPreviousMonth, ...days];
    }
    return days;
  }

}
