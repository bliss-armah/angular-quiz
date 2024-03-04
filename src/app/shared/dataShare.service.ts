import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataShareService {
  constructor() {}
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  private showHeaderSubject = new BehaviorSubject<boolean>(true);
  showHeader$: Observable<boolean> = this.showHeaderSubject.asObservable();
  
  setData(data: any): void {
    this.dataSubject.next(data);
  }


  updateShowHeader(showHeader: boolean): void {
    this.showHeaderSubject.next(showHeader);
  }

  
}