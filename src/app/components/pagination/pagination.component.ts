import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPaginations } from 'src/app/types';
import { DataStorageService } from 'src/app/shared/dataStorage.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() paginationData!: QuizPaginations;
  @Input() dataId!: string;
  @Output() increase = new EventEmitter<number>();
  @Output() decrease = new EventEmitter<number>();
  @Input() page!: number;
  pageNumbers!: number[];

  constructor(private dataStorageService: DataStorageService) {}
  ngOnInit(): void {
    // this.page = this.dataStorageService.page
    this.pageNumbers = Array.from(
      { length: this.paginationData?.totalPages },
      (_, i) => i + 1
    );
  }

  increasePage() {
    this.increase.emit();
  }

  decreasePage() {
    this.decrease.emit();
  }

  nextPage() {
    this.increasePage();
  }

  previousPage() {
    this.decreasePage();
  }
}
