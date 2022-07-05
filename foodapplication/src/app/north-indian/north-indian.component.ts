import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmenuService } from '../addmenu.service';
import { AddcartformComponent } from '../home/addcartform/addcartform.component';
import { NorthindianService } from './northindian.service';

@Component({
  selector: 'app-north-indian',
  templateUrl: './north-indian.component.html',
  styleUrls: ['./north-indian.component.css']
})
export class NorthIndianComponent implements OnInit {

  constructor(private _northindianservice:NorthindianService,private _dialog:MatDialog,private  _serv:AddmenuService) { }
northFooddata:any
  ngOnInit(): void {
    this.getNorthindianFood();
  }
getNorthindianFood(){
  this._northindianservice.northIndianfood().subscribe((res)=>{
    console.log(res);
    this.northFooddata=res;
  })
}
openDialog(data:any): void {
  this._serv.info=data
  
    this._dialog.open(AddcartformComponent, {
   
    });
  }
}
