import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MessageService } from '../../shared/services/message.service';
import { User } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { MapUserService } from '../../shared/services/map-user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  public userId;
  public user;
  constructor(public router: Router,
    public userService: UserService,
    public messageService: MessageService,
    public mapUserService: MapUserService) {
    const userDetail = JSON.parse(localStorage.getItem('user'));
    this.userId = userDetail._id;
    this.user = new User({});
  }

  ngOnInit() {
    this.userService.getById(this.userId)
      .subscribe(
        (data: any) => {
          this.user = this.mapUserService.mapResponse(data);
        },
        error => {
          this.messageService.showError(error);
        }
      )
  }

  remove(id) {
    let delConfirm = confirm('Are you sure to delete your profile?');
    if (delConfirm) {
      this.userService.remove(id)
        .subscribe(
          data => {
            localStorage.clear();
            this.messageService.showSuccess('User deleted');
            this.router.navigate(['/auth/login']);
          },
          error => {
            this.messageService.showError(error);
          }
        )
    }
  }

}
