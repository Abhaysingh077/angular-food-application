import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmenuService } from '../addmenu.service';
import { AddcartformComponent } from '../home/addcartform/addcartform.component';
import { ChinesefoodserviceService } from './chinesefoodservice.service';

@Component({
  selector: 'app-chinese-food',
  templateUrl: './chinese-food.component.html',
  styleUrls: ['./chinese-food.component.css']
})
export class ChineseFoodComponent implements OnInit {

  constructor(private _chineseFoodser:ChinesefoodserviceService,private _dialog:MatDialog,private  _serv:AddmenuService) { }
chineseFooddata:any
  ngOnInit(): void {
    this.chineseFood();
  }
chineseFood(){
this._chineseFoodser.getChinesefood().subscribe((res)=>{
  this.chineseFooddata=res;
})
}

openDialog(data:any): void {
  this._serv.info=data
  
    this._dialog.open(AddcartformComponent, {
   
    });
  }
}
