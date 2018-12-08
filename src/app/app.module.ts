import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRouting} from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { MainComponent } from './components/auth/main/main.component';
import { GameComponent } from './components/core/game/game.component';
import { SelectedCardsComponent } from './components/core/game/selected-cards/selected-cards.component';
import { ClickHandlerDirective } from './directives/click/click-handler.directive';
import {AuthService} from './service/auth/auth.service';
import {AuthGuardService} from './service/auth/auth-guard/auth-guard.service';
import {CardsService} from './service/cards/cards.service';
import {ClickService} from './service/util/click.service';
import { CounterDirective } from './directives/counter/counter.directive';
import {FormsModule} from '@angular/forms';
import { QuestionComponent } from './components/core/question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    GameComponent,
    ClickHandlerDirective,
    CounterDirective,
    SelectedCardsComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRouting
  ],
  providers: [AuthService, AuthGuardService, CardsService, ClickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
