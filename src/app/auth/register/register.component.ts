import { Component, OnInit } from '@angular/core';
import { User, AuthService } from "./../services/auth.service";
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user;
  public submitting: boolean = false;
  constructor(public authService: AuthService,
    public messageService: MessageService) {
    this.user = new User({});
  }

  ngOnInit() {
  }

  register() {
    this.submitting = true;
    this.authService.reset(this.user)
      .subscribe(
        (data: any) => {
          this.messageService.showSuccess('User registration successfull');
          this.submitting = false;
        },
        (error) => {
          this.messageService.showError(error);
          this.submitting = false;
        }
      )
  }

}
