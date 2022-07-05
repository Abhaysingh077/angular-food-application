import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddmenuService {
  constructor(private _additem: HttpClient) {}

info:string=''


  addfood(body: any) {
    return this._additem.post(
      'https://friends-food-corner.herokuapp.com/addmenu',
      body
    );
  }
  deleteFood(id:number){
    return this._additem.delete( 'https://friends-food-corner.herokuapp.com/menu/'+id)
  }
}
