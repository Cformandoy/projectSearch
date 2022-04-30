import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
