import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('form') verifyForm: NgForm;

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.verifyForm);
    const entered = this.verifyForm.value.pin;
    if (entered.length === 0) {
      // this.verifyForm.
    }
    if (entered === 'connector') {
      this.auth.logIn();
      this.route.navigate(['/game']);
    } else if (entered === 'connectAdmin') {
      this.auth.logIn();
      this.route.navigate(['/question']);
    } else if (entered !== 'connector' || entered !== 'connectAdmin') {
      window.alert('Wrong PIN');
    }
  }

}
