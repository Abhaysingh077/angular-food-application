import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root',
})
export class FooditemService {
  constructor(private _http: HttpClient) {}

  getFooddata() {
    return this._http.get('https://friends-food-corner.herokuapp.com/menu');
  }
}
