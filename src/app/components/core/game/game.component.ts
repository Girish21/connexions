import {Component, OnDestroy, OnInit} from '@angular/core';
import {Card} from '../../../model/card';
import {Subscription} from 'rxjs/Subscription';
import {CardsService} from '../../../service/cards/cards.service';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import {ClickService} from "../../../service/util/click.service";
import {AuthService} from "../../../service/auth/auth.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('20ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0})
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class GameComponent implements OnInit, OnDestroy {

  cards: Card[];
  subscription: Subscription;

  constructor(private cardService: CardsService, private clickService: ClickService, private auth: AuthService) {
  }

  ngOnInit() {
    this.cards = this.cardService.getCards();
    this.subscription = this.cardService.cardsChanged.subscribe(
      (cards) => {
        this.cards = cards;
      }
    );
  }

  ngOnDestroy() {
    this.cardService.resetSelectedCards();
    this.cardService.resetCards();
    this.clickService.resetClickCount();
    this.subscription.unsubscribe();
    this.auth.logOut();
  }

}
