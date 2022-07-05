import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChinesefoodserviceService {

  constructor(private _chinesefood:HttpClient) { }
  getChinesefood(){
    return this._chinesefood.get('https://friends-food-corner.herokuapp.com/men/Chinese');
  }
}
