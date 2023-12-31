import { DataShareService } from './../../shared/dataShare.service';
import { AuthService } from './../../login/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropmenuComponent } from '../dropmenu/dropmenu.component';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import {clickedOutsideDirective } from '../../shared/clickOustide.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DropmenuComponent, RouterModule,clickedOutsideDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub!: Subscription;
  isAuthenticated = false;
  isMenuOpen = false;
  showHeader: boolean = true;

  constructor(private authService: AuthService,private dataShareService:DataShareService) {}

  ngOnInit() {
    this.dataShareService.showHeader$.subscribe((showHeader) => {
      this.showHeader = showHeader;
    });

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout() {
    this.authService.logout();
  }
  onOpenMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  clickedOutside() {
    this.isMenuOpen = false;
  }



  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
