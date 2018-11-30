import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UserRoutingModule } from './user.routing';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [
    EditUserComponent,
    SearchUserComponent,
    ViewUserComponent
  ],
  providers: [UserService]
})
export class UserModule { }
