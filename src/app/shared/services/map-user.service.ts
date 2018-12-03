import { Injectable } from "@angular/core";

@Injectable()
export class MapUserService {
  constructor() {
  }

  mapRequest(data) {
    if (data.district) {
      if (data.area) {
        data.address = {
          'district': data.district,
          'area': data.area
        }
      } else {
        data.address = {
          'district': data.district
        }
      }
    }

    return data;
  }

  mapResponse(data) {
    let address = data.address;
    if (address.district) {
      data.district = address.district;
    }
    if (address.area) {
      data.area = address.area;
    }

    return data;
  }
}
