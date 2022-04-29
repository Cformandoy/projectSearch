import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/interfaces/interfaces';
import { SearchService } from 'src/app/services/search.service';

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

  constructor(private service:SearchService) { }

  drinkList:Drink[] = []
  textSearch:string = ""


  ngOnInit(): void {
  }

  onClickSearch(){
    
    console.log("Click en buscar: "+this.textSearch);
    this.service.searchDataDrink(this.textSearch)
    .subscribe(resp=>{
      console.log(resp.drinks);
      if(resp.drinks){
        
        this.drinkList = resp.drinks
      }else{
        this.drinkList = []
      }
      


    })

  }

}
