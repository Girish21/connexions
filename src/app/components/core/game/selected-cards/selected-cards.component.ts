import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardsService} from '../../../../service/cards/cards.service';
import {Card} from '../../../../model/card';
import {Subscription} from 'rxjs/Subscription';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-selected-cards',
  templateUrl: './selected-cards.component.html',
  styleUrls: ['./selected-cards.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('100ms', [
          animate('0.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-50%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateX(25px)', offset: 0.4}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1})
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class SelectedCardsComponent implements OnInit, OnDestroy {

  cards: Card[];
  subscription: Subscription;

  constructor(private cardService: CardsService) { }

  ngOnInit() {
    this.cards = this.cardService.selectedCards;
    this.subscription = this.cardService.cardsSelectedChanged.subscribe(
      cards => {
        this.cards = cards;
      }
    );
  }

  canShow() {
    return this.cards.length > 0;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
