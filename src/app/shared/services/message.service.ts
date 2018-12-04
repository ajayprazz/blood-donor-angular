import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class MessageService {

  constructor(public toastr: ToastrService) {
  }

  showMsg(msg) {
    this.toastr.show(msg);
  }
  showInfo(msg) {
    this.toastr.info(msg);
  }
  showSuccess(msg) {
    this.toastr.success(msg);
  }
  showError(error: any) {
    // debugger
    if (error.error) {
      if (error.error.name == "MongoError") {
        let errMsg = error.error.errmsg.split(':')[2].split(' ');
        if (errMsg[1] == 'email_1') {
          this.toastr.error('provided email is already used');
        } else {
          this.toastr.error('provided username is already taken')
        }
      } else {
        this.toastr.error(error.error.message);
      }
    }
    else if (error.message) {
      console.log('here2');
      this.toastr.error(error.message);
    }
  }
  showWarning(msg) {
    this.toastr.warning(msg);
  }
}
