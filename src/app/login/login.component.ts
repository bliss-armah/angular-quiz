import { AuthResponseData, AuthService } from './auth.service';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LoaderComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('f', { static: false }) loginForm!: NgForm;
  createAccount = false;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onToggleCreateAccount() {
    this.createAccount = !this.createAccount;
  }

  onSubmit() {
    const name = this.loginForm.value.userData.name;
    const email = this.loginForm.value.userData.email;
    const password = this.loginForm.value.userData.password;

    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;

    if (this.createAccount) {
      authObs = this.authService.signUp(name, email, password);
    } else {
      authObs = this.authService.logIn(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/profile']);
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );

    this.loginForm.reset();
  }
}
