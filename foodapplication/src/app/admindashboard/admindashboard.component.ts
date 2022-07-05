import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddmenuService } from '../addmenu.service';
import { FooditemService } from '../home/fooditem.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
})
export class AdmindashboardComponent implements OnInit {
  constructor(private _addfood: AddmenuService,private _getfood:FooditemService) {}
  showFiller = false;
  addFood: any;
  getfooddata:any
  ngOnInit(): void {
    this.getFood();
    this.addFood = new FormGroup({
      id:new FormControl(''),
      item: new FormControl(''),
      image: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl(''),
    });
  }
  getFood(){
this._getfood.getFooddata().subscribe((data)=>{
this.getfooddata=data;
})
  }

  addMenu() {
    console.log(this.addFood.value);
    this._addfood.addfood(this.addFood.value).subscribe((data) => {
      alert('Registratered Succefully');
      this.addFood.reset();
    });
  }


  deleteFood(id:number){
    this._addfood.deleteFood(id).subscribe(()=>{this.getFood();})
  }
}
