import {Component, OnInit} from '@angular/core';
import {HttpObeserveRequestService} from '../../services/http-observe-request.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  constructor(private _http: HttpObeserveRequestService) {

  }
  ngOnInit() {
    let data = this._http._getCall('https://restcountries.eu/rest/v2/all');
    console.log(data);
  }
}
