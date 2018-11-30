import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "./../../shared/services/base.service";
import { User } from "../../auth/services/auth.service";

@Injectable()
export class UserService extends BaseService {
  public url: string;

  constructor(public http: HttpClient) {
    super();
  }

  getById(id) {
    return this.http.get(this.url + 'user/' + id, this.headersWithToken());
  }

  search(data) {
    return this.http.post(this.url + 'user/search', data, this.headersWithToken());
  }

  update(data: User) {
    return this.http.put(this.url + 'user/' + data._id, data, this.headersWithToken());
  }

  remove(id) {
    return this.http.delete(this.url + 'user/' + id, this.headersWithToken());
  }

}
