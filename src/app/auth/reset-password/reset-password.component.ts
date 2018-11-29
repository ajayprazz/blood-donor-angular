import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService, User } from '../services/auth.service';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public token: string;
  public user;
  public submitting: boolean = false;

  constructor(public active: ActivatedRoute,
    public router: Router,
    public authService: AuthService,
    public messageService: MessageService) {
    this.user = new User({});
  }

  ngOnInit() {
    this.token = this.active.snapshot.params.token;
  }

  reset() {
    this.submitting = true;
    this.user.token = this.token;
    this.authService.reset(this.user)
      .subscribe(
        (data: any) => {
          this.submitting = false;
          this.router.navigate(['/auth/login']);
          this.messageService.showSuccess(data.message);

        },
        (error) => {
          this.submitting = false;
          this.messageService.showError(error);
        }
      )
  }

}
