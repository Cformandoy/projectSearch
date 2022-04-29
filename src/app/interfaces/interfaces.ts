export interface GameSearch {

   price:number,
   seller:string,
   url:string
    
}

export interface ApiResult{
    currency:string,
    currentLowestPrice:number,
    developer:string,
    id:string,
    name:string,
    releaseDate:string,
    stores:GameSearch[],
    type:string
    

}