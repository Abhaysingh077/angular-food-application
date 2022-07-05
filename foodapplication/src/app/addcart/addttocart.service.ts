import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddttocartService {

  constructor(private _addtocart:HttpClient) { }
  addtocart(data:any){
    
    return this._addtocart.post('https://friends-food-corner.herokuapp.com/addcart',data);
  }
}
