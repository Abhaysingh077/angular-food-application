import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SouthindianService {

  constructor(private _south:HttpClient) { }
  getSouthfood() {
    return this._south.get('https://friends-food-corner.herokuapp.com/men/South Indian');
  }
  
}
