import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetcartserviceService {

  constructor(private _getcart:HttpClient) { }
  getcart(){
    return this._getcart.get<any[]>('https://friends-food-corner.herokuapp.com/cart');
  }
  deleteCart(id:number){
    return this._getcart.delete('https://friends-food-corner.herokuapp.com/cart/'+id);
  }
}
