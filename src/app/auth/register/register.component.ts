import { Component, OnInit } from '@angular/core';
import { User, AuthService } from "./../services/auth.service";
import { MessageService } from './../../shared/services/message.service';
import { MapUserService } from '../../shared/services/map-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user;
  public data;
  public submitting: boolean = false;
  public barLabel: string = "Password strength:";

  constructor(public router: Router,
    public authService: AuthService,
    public messageService: MessageService,
    public mapUserService: MapUserService) {
    this.user = new User({});
    this.user.bloodgroup = '';
  }

  ngOnInit() {
  }

  register() {
    this.submitting = true;
    this.data = this.mapUserService.mapRequest(this.user);
    this.authService.register(this.data)
      .subscribe(
        (data) => {
          this.router.navigate(['/auth/login'])
          this.messageService.showSuccess('User registration successfull, please login to continue');
          this.submitting = false;
        },
        (error) => {
          this.messageService.showError(error);
          this.submitting = false;
        }
      )
  }

}
