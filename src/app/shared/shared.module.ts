import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageService } from "./services/message.service";
import { MapUserService } from "./services/map-user.service"
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PageNotFoundComponent, HeaderComponent],
  exports: [PageNotFoundComponent, HeaderComponent],
  providers: [MessageService, MapUserService]
})
export class SharedModule { }
