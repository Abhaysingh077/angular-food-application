import { Component, OnInit } from '@angular/core';
import { GetcartserviceService } from './getcartservice.service';

@Component({
  selector: 'app-get-cart',
  templateUrl: './get-cart.component.html',
  styleUrls: ['./get-cart.component.css'],
})
export class GetCartComponent implements OnInit {
  constructor(private _getcart: GetcartserviceService) {}
  getcartdata: any;
  grandtotal = 0;
  ngOnInit(): void {
    this.getcatItem();
  }
  getcartItemValue() {
    this._getcart.getcart().subscribe((data: any) => {
      data.forEach((element: any) => {
        this.grandtotal -= element.total;
      });
    });
  }
  getcatItem() {
    this._getcart.getcart().subscribe((data: any) => {
      data.forEach((element: any) => {
        this.grandtotal += element.total;
      });

      console.log(this.grandtotal);
      this.getcartdata = data;
    });
  }

  deleteCart(id: number) {
    this._getcart.deleteCart(id).subscribe((data: any) => {
      console.log('delted data' + data);
      this.getcatItem();
    });
    this.getcartItemValue();
  
  }
}
