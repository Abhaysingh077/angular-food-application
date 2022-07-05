import { Component, OnInit } from '@angular/core';
import { FooditemService } from './fooditem.service';
import { MatDialog } from '@angular/material/dialog';
import { AddttocartService } from '../addcart/addttocart.service';
import { AddcartformComponent } from './addcartform/addcartform.component';
import { AddmenuService } from '../addmenu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _http: FooditemService,
    private _addcart: AddttocartService,
    private _dialog: MatDialog,
    private _serv: AddmenuService
  ) {}
  foodata: any;
  ngOnInit(): void {
    this.getFood();
  }

  getFood() {
    this._http.getFooddata().subscribe((res) => {
      this.foodata = res;
    });
  }

  
  postdatatocart(item: string) {
    this._addcart.addtocart(item).subscribe((data) => console.log(data));
  }

  openDialog(data: any): void {
    this._serv.info = data;

    this._dialog.open(AddcartformComponent, {});
  }
}
