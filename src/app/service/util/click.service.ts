import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ClickService {

  counterChanged: Subject<number> = new Subject<number>();

  count = 0;

  constructor() { }

  getCount() {
    return this.count;
  }

  resetClickCount() {
    this.count = 0;
    this.counterChanged.next(this.count);
  }

  updateCount() {
    this.count = this.count + 1;
    this.counterChanged.next(this.count);
  }

}
