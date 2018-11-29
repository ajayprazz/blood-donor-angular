
export class User {
  public name: string;
  public email: string;
  public username: string;
  public password: string;
  public address: {
    district: String,
    area: String
  };
  public bloodgroup: string;
  public phoneNo: number;
  public dateOfBirth;

  constructor(options: any) {
    for (let key in options) {
      this[key] = options[key] || '';
    }
  }
}


import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "../../shared/services/base.service";

@Injectable()
export class AuthService extends BaseService {

  constructor(public http: HttpClient) {
    super();
  }

  login(data: User) {
    return this.http.post(this.url + 'auth/login', data, this.headersOnly());
  }

  register(data: User) {
    return this.http.post(this.url + 'auth/register', data, this.headersOnly());
  }

  forgot(data: User) {
    return this.http.post(this.url + 'auth/forgotPassword', data, this.headersOnly());
  }

  reset(data: any) {
    return this.http.post(this.url + 'auth/resetPassword/' + data.token, data, this.headersOnly());
  }

}
