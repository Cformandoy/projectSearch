import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items : any[] = [
    {
      url : 'home',
      text: 'Home'
    },
    {
      url : 'about',
      text: 'About'
    },
    {
      url : 'settings',
      text: 'Settings'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
