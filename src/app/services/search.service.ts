import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResult } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  
  
  getDataGame(){

    
    return this.http.get<ApiResult>('http://api.giphy.com/v1/gifs/trending&api_key=euxam8qxqEsboArbOLkgA6Orqo5y7vHh&limit=15',{

    
    
    });

  }

  searchDataGame(text:string){
    
    
    return this.http.get<ApiResult>(`https://game-prices.p.rapidapi.com/game/${text}?region=us&type=game`,{
    
    });



  }
}
