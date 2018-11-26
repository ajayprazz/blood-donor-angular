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
      this.toastr.error(error.error.message);
    }
    else if (error.message) {
      this.toastr.error(error.message);
    }
  }
  showWarning(msg) {
    this.toastr.warning(msg);
  }
}
