import {Component, OnInit} from '@angular/core';

@Component({
  selector: "app-footer",
  templateUrl: "footer.component.html",
  styleUrls: []
})
export class FooterComponent implements OnInit {
  public footerMenus = [];
  constructor() {
    this.footerMenus = [
      {head: "Navigation", submenus: [
        {name: "Home", path: ""},
        {name: "Home", path: ""},
        {name: "Home", path: ""},
        {name: "Home", path: ""},
        {name: "Home", path: ""}
      ]},
      {head: "Navigation", submenus: [
        {name: "Home", path: ""},
        {name: "Home", path: ""},
        {name: "Home", path: ""},
        {name: "Home", path: ""},
        {name: "Home", path: ""}
      ]},
      {head: "Navigation", submenus: [
        {name: "Home", path: ""},
        {name: "Home", path: ""},
        {name: "Home", path: ""},
        {name: "Home", path: ""},
        {name: "Home", path: ""}
      ]}
    ]
  }
  ngOnInit() {

  }
}
