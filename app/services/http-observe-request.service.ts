import { Injectable } from '@angular/core';
import {HttpRequestService} from './http-request.service';


@Injectable({providedIn: 'root'})
export class HttpObeserveRequestService {
  constructor(private _http: HttpRequestService){

  }

  _getCall(url: string) {
    return this._http.getCall(url).subscribe((data) => {
        console.log(data);
        return data;
    }, (err) => {
        return err;
    });
  }
}
