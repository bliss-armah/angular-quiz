import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { AuthGuard } from './login/auth.guard';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuestionsComponent } from './quizzes/questionspage/questions/questions.component';
import { QuestionspageComponent } from './quizzes/questionspage/questionspage.component';
import { SettingsComponent } from './settings/settings.component';
import { GeneralComponent } from './settings/general/general.component';
import { PasswordComponent } from './settings/password/password.component';
import { QuizsettingsComponent } from './settings/quizsettings/quizsettings.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfilepageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: GeneralComponent,
      },
      {
        path: 'password',
        component: PasswordComponent,
      },
      {
        path: 'quizzes',
        component: QuizsettingsComponent,
      },
    ],
  },
  {
    path: 'quizzes',
    component: QuizzesComponent,
    children: [
      {
        path: '',
        component: QuestionspageComponent,
      },
      {
        path: ':id',
        component: QuestionsComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
