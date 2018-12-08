import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth/auth.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.auth.logOut();
  }

}
