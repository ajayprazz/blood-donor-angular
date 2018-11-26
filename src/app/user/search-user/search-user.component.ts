import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MessageService } from '../../shared/services/message.service';
import { AuthService, User } from '../../auth/services/auth.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  public user;
  public users;
  public showResult: boolean = false;
  public searching: boolean = false;

  constructor(public userService: UserService,
    public messageService: MessageService,
    public authService: AuthService) {
    this.user = new User({});
    this.user.bloodgroup = '';
  }

  ngOnInit() {
  }

  search() {
    this.searching = true;

  }
}
