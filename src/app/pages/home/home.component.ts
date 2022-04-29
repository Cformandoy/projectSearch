import { Component, OnInit } from '@angular/core';
import { ApiResult, Drink} from 'src/app/interfaces/interfaces';
import { SearchService } from 'src/app/services/search.service';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  

  drinkList:Drink[] = []
  textSearch:string = ""

  constructor(private service:SearchService) {}

  



  ngOnInit(): void {

    this.service.getDataDrink()
      
      .subscribe(resp=>{
        console.log(resp.drinks)
        this.drinkList = resp.drinks;
      })
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
