import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './service/auth/auth-guard/auth-guard.service';
import {MainComponent} from './components/auth/main/main.component';
import {GameComponent} from './components/core/game/game.component';
import {QuestionComponent} from "./components/core/question/question.component";

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'game',
    canActivate: [AuthGuardService],
    component: GameComponent
  },
  {
    path: 'question',
    canActivate: [AuthGuardService],
    component: QuestionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRouting {
}
