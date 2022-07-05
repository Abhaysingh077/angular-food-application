import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddttocartService } from 'src/app/addcart/addttocart.service';
import { AddmenuService } from 'src/app/addmenu.service';

@Component({
  selector: 'app-addcartform',
  templateUrl: './addcartform.component.html',
  styleUrls: ['./addcartform.component.css'],
})
export class AddcartformComponent implements OnInit {
  constructor(
    private serv: AddmenuService,
    private addtocart: AddttocartService,private _dialog:MatDialog
  ) {}
  name: any;
  addcartform: any;

  ngOnInit(): void {
    this.name = this.serv.info;
    this.addcartform = new FormGroup({
      name: new FormControl('',Validators.required),
      item: new FormControl(this.name),
      quantity: new FormControl('',Validators.required),
    });
  }
  postdatatocart() {
    this.addtocart
      .addtocart(this.addcartform.value)
      .subscribe((data) => console.log(data));

    alert('Added Successfully');
    this.addcartform.reset();
    this._dialog.closeAll();
  }
}
