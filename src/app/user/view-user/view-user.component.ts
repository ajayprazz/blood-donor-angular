import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  public userId;
  public user;
  constructor(public userService: UserService,
    public messageService: MessageService) {
    const userDetail = JSON.parse(localStorage.getItem('user'));
    this.userId = userDetail._id;
  }

  ngOnInit() {
    this.userService.getById(this.userId)
      .subscribe(
        (data: any) => {
          this.user = data;
        },
        error => {
          this.messageService.showError(error);
        }
      )
  }

}
