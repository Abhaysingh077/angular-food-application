import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NorthindianService {

  constructor(private _northidian:HttpClient) { }
  northIndianfood(){
   return this._northidian.get('https://friends-food-corner.herokuapp.com/men/North Indian');
  }
}
