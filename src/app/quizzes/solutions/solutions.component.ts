import { DataShareService } from './../../shared/dataShare.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QuizbarComponent } from 'src/app/components/quizbar/quizbar.component';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule,QuizbarComponent],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
})
export class SolutionsComponent implements OnInit {
  data: any;

  constructor(private dataShareService: DataShareService,private router: Router,private route: ActivatedRoute) {}

 ngOnInit(): void {
  this.dataShareService.updateShowHeader(false);
    this.dataShareService.data$.subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  onTryAgainClick(): void {
    // Navigate back to the previous route
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
