import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public token: string;

  constructor(public active: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.active.snapshot.params.token;
    console.log('token', this.token);
  }

}
