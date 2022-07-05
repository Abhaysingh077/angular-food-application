import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmenuService } from '../addmenu.service';
import { AddcartformComponent } from '../home/addcartform/addcartform.component';
import { SouthindianService } from './southindian.service';

@Component({
  selector: 'app-south-indian',
  templateUrl: './south-indian.component.html',
  styleUrls: ['./south-indian.component.css']
})
export class SouthIndianComponent implements OnInit {

  constructor(private _southfood:SouthindianService,private _dialog:MatDialog,private  _serv:AddmenuService) { }
southfood:any;
  ngOnInit(): void {
    this.getSouthfood();
  }
getSouthfood()
{
  this._southfood.getSouthfood().subscribe((data)=>{
    this.southfood=data;

  })
}
openDialog(data:any): void {
  this._serv.info=data
  
    this._dialog.open(AddcartformComponent, {
   
    });
  }
}
