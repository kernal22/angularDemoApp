import {Component, OnInit} from '@angular/core';

@Component({
  selector: "app-header",
  templateUrl: "header.component.html",
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit{
  public menus;
  constructor(){
    this.menus = [
      {"path": "/home", "name": "Home", "class": "active", type: "link"},
      {"path": "/about", "name": "About", type: "link"},
      {path: "", name: "More", type: "sub", child: [
        {path: "", name: "Portfolio", class: "drop-text"},
        {path: "", name: "Blog", class: "drop-text"},
        {path: "", name: "Visit", class: "drop-text"},
      ]},
      {"path": "", "name": "Contact", type: "link"}
    ]
  }
  ngOnInit() {

  }
}
