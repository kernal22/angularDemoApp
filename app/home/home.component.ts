import {Component, OnInit} from '@angular/core';
import {HttpRequestService} from '../services/http-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  constructor(private _httpService: HttpRequestService) {

  }
  ngOnInit() {
    this._httpService.postCall('https://jsonplaceholder.typicode.com/posts', {}).subscribe((data) => {
      console.log(data);
    }, err => {
      console.log(err);
    });

    this._httpService.getCall('https://jsonplaceholder.typicode.com/posts', {id: 100}).subscribe((data) => {
      console.log(data);
    }, err => {
        console.log(err);
    })

    this._httpService.putCall('https://jsonplaceholder.typicode.com/posts', {id: 22}).subscribe((data) => {
      console.log(data);
    }, err => {
        console.log(err);
    })
  }
}
