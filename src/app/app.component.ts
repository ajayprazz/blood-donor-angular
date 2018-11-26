import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blood-donor-angular';

  public loggedInUser;

  constructor(public router: Router) {
    this.loggedInUser = JSON.parse(localStorage.getItem('user'));
    this.router.events.subscribe((val: NavigationStart) => {
      if (val.url) {
        let url = val.url.split('/')[1];
        if (url !== 'auth') {
          if (!localStorage.getItem('token')) {
            this.router.navigate(['/auth/login']);
          }
        }
      }
    })
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return localStorage.getItem('token') ? true : false;
  }
}
