import {Directive, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../service/auth/auth.service';
import {Observable} from 'rxjs/rx';
import {CardsService} from '../../service/cards/cards.service';
import {ClickService} from "../../service/util/click.service";

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective implements OnInit, OnDestroy {

  startTimer = false;
  subscribeAuth: Subscription;
  subscribeTimer: Subscription;
  subscribeCards: Subscription;
  ticker: number;
  minute: string;
  seconds: string;

  constructor(private el: ElementRef, private auth: AuthService, private countService: ClickService) {
  }

  ngOnInit(): void {
    this.startTimer = this.auth.getAuthState();
    // console.log('AuthState ' + this.startTimer);
    const timer = Observable.timer(100, 1000);

    this.subscribeAuth = this.auth.authStateChanged.subscribe(
      (state) => {
        this.startTimer = state;
        if (this.startTimer) {
          this.subscribeTimer = timer.subscribe(
            t => {
              this.ticker = t;
              if (this.ticker < 10) {
                this.minute = '00';
                this.seconds = '0' + this.ticker;
              } else if (this.ticker < 60) {
                this.minute = '00';
                this.seconds = this.ticker + '';
              } else {
                const min = Math.floor(this.ticker / 60);
                const sec = this.ticker % 60;
                if (min < 10) {
                  this.minute = '0' + min;
                } else {
                  this.minute = min + '';
                }
                if (sec < 10) {
                  this.seconds = '0' + sec;
                } else {
                  this.seconds = sec + '';
                }
              }
              this.el.nativeElement.innerHTML = this.minute + ':' + this.seconds;
              // console.log(this.minute + ':' + this.seconds);
            }
          );
        } else {
          this.subscribeTimer.unsubscribe();
          this.el.nativeElement.innerHTML = '';
        }
      }
    );

    /*this.subscribeCards = this.countService.counterChanged.subscribe(
      count => {
        if (count === 4) {
          this.subscribeTimer.unsubscribe();
        }
      }
    );*/
  }

  ngOnDestroy(): void {
    this.subscribeAuth.unsubscribe();
  }

}
