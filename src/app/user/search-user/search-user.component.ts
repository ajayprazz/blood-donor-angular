import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MessageService } from '../../shared/services/message.service';
import { AuthService, User } from '../../auth/services/auth.service';
import { MapUserService } from '../../shared/services/map-user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  public user;
  public users: Array<any> = [];
  public showResult: boolean = false;
  public searching: boolean = false;
  public data;

  constructor(public userService: UserService,
    public messageService: MessageService,
    public authService: AuthService,
    public mapUserService: MapUserService) {
    this.user = new User({});
    this.user.bloodgroup = '';
  }

  ngOnInit() {
  }

  search() {
    this.searching = true;
    this.data = this.mapUserService.mapRequest(this.user);
    this.userService.search(this.user)
      .subscribe(
        (data: any) => {
          this.searching = false;
          this.showResult = true;
          data.forEach((user) => {
            this.users.push(this.mapUserService.mapResponse(user));
          });
        },
        error => {
          this.searching = false;
          this.messageService.showError(error);
        }
      )
  }

  searchAgain() {
    this.showResult = false;
    this.user = new User({});
    this.users = [];
    this.user.bloodgroup = '';
  }
}
