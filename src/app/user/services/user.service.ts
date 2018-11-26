import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "./../../shared/services/base.service";

@Injectable()
export class UserService extends BaseService {
  public url: string;

  constructor(public http: HttpClient) {
    super();
  }

  getById(id) {
    return this.http.get(this.url + 'user/' + id, this.headersWithToken());
  }
}
