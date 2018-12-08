import {Directive, ElementRef, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Card} from '../../model/card';
import {ClickService} from '../../service/util/click.service';
import {CardsService} from '../../service/cards/cards.service';

@Directive({
  selector: '[appClickHandler]'
})
export class ClickHandlerDirective implements OnInit, OnDestroy {

  clicks = 0;
  subscription: Subscription;

  @Input() card: Card;
  @Input() index: number;

  constructor(private el: ElementRef, private counter: ClickService, private cardsService: CardsService) { }

  ngOnInit(): void {
    this.subscription = this.counter.counterChanged.subscribe(
      count => {
        this.clicks = count;
      }
    );
  }

  @HostListener('click') clicked(data) {
    if (!this.card.isClicked && this.clicks < 4) {
      this.counter.updateCount();
      this.cardsService.updateClicked(this.index);
      this.el.nativeElement.children[0].classList.add('back-reveal');
      this.el.nativeElement.children[1].classList.add('front-reveal');
      if (this.card.hasImage) {
        this.cardsService.cardSelected(this.index);
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
