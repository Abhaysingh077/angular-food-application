import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetbillbynameService {

  constructor(private _getbillByName:HttpClient) { }
  getbill(name:string){
    return this._getbillByName.get('https://friends-food-corner.herokuapp.com/cart/'+name)
  }
}
