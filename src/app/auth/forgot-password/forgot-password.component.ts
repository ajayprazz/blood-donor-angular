import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/services/message.service';
import { AuthService, User } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public user;
  public submitting: boolean = false;

  constructor(public router: Router,
    public messageService: MessageService,
    public authService: AuthService) { }

  ngOnInit() {
    this.user = new User({});
  }

  forgot() {
    this.submitting = true;
    this.authService.forgot(this.user)
      .subscribe(
        (data: any) => {
          this.submitting = false;
          this.router.navigate(['/auth/login']);
          this.messageService.showSuccess(data.message);
        },
        (error) => {
          this.submitting = false;
          console.log('error', error);
          this.messageService.showError(error);
          this.user = new User({});
        }
      )
  }

}
