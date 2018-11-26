import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ViewUserComponent } from "./view-user/view-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { SearchUserComponent } from "./search-user/search-user.component";

const userRoute: Routes = [
  {
    path: 'view-user',
    component: ViewUserComponent
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent
  },
  {
    path: 'search-user',
    component: SearchUserComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(userRoute)],
  exports: [RouterModule]
})

export class UserRoutingModule {

}
