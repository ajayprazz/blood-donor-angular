import { Component, OnInit } from '@angular/core';
import { User } from '../../auth/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { MessageService } from '../../shared/services/message.service';
import { MapUserService } from '../../shared/services/map-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public user;
  public userId;
  public data;
  public submitting: boolean = false;

  constructor(public router: Router,
    public activeRoute: ActivatedRoute,
    public userService: UserService,
    public messageService: MessageService,
    public mapUserService: MapUserService) {
    this.userId = this.activeRoute.snapshot.params.id;
    this.user = new User({});
  }

  ngOnInit() {
    this.userService.getById(this.userId)
      .subscribe(
        data => {
          this.user = this.mapUserService.mapResponse(data);
        },
        error => {
          this.messageService.showError(error);
        }
      )
  }

  update() {
    this.submitting = true;
    this.data = this.mapUserService.mapRequest(this.user);
    this.userService.update(this.data)
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
