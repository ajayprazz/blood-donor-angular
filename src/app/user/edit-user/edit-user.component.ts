import { Component, OnInit } from '@angular/core';
import { User } from '../../auth/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public user;
  public userId;
  public submitting: boolean = false;

  constructor(public router: Router,
    public activeRoute: ActivatedRoute,
    public userService: UserService,
    public messageService: MessageService) {
    this.userId = this.activeRoute.snapshot.params.id;
    this.user = new User({});
  }

  ngOnInit() {
    this.userService.getById(this.userId)
      .subscribe(
        data => {
          this.user = data;
        },
        error => {
          this.messageService.showError(error);
        }
      )
  }

  update() {
    this.submitting = true;
    this.userService.update(this.user)
      .subscribe(
        data => {
          this.submitting = false;
          this.messageService.showSuccess('User profile updated');
          this.router.navigate(['/user/view-user']);
        },
        error => {
          this.submitting = false;
          this.messageService.showError(error);
        }
      )
  }

}
