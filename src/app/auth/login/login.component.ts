import { Component, OnInit } from '@angular/core';
import { User, AuthService } from './../services/auth.service';
import { MessageService } from "./../../shared/services/message.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;

  constructor(public messageService: MessageService,
    public authService: AuthService,
    public router: Router) {
    this.user = new User({});
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user)
      .subscribe(
        (data: any) => {
          this.messageService.showSuccess('welcome ' + data.user.username);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          this.router.navigate(['/user/view-user']);
        },
        (error) => {
          this.messageService.showError(error);
          console.log('error', error);
        }
      )
  }

}
