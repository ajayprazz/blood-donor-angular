import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class BaseService {
  public url;
  public isLoggedIn: boolean = false;

  constructor() {
    this.url = environment.baseUrl;
  }

  headersOnly() {
    let option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return option;
  }

  headersWithToken() {
    let option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    }
    return option;
  }
}
