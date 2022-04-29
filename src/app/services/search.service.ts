import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResult } from '../interfaces/interfaces';
import { HomeComponent } from '../pages/home/home.component';


@Injectable({
  providedIn: 'root'
})





export class SearchService {

  constructor(private http:HttpClient) { }
  
  

  getDataDrink(){

  
    return this.http.get<ApiResult>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ma');

  }

  searchDataDrink(text:string){
    
    
    return this.http.get<ApiResult>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
    );



  }
}
