import { Component, OnInit } from '@angular/core';
import { GameSearch } from 'src/app/interfaces/interfaces';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  gamelist:GameSearch[] = []
  textSearch:string = ""

  constructor(private service:SearchService ) {


  }

  ngOnInit(): void {

    this.service.getDataGame()
      
      .subscribe(resp=>{
        console.log(resp.stores)
        this.gamelist = resp.stores;
      })
  }

  onClickSearch(){
    
    console.log("Click en buscar: "+this.textSearch);
    this.service.searchDataGame(this.textSearch)
    .subscribe(resp=>{
      console.log(resp.name);
      if(resp.id){
        
        this.gamelist = resp.stores
      }else{
        this.gamelist = []
      }
      


    })

  }

}
