import { Component, OnInit } from '@angular/core';
import { GetcartserviceService } from '../get-cart/getcartservice.service';
import { GetbillbynameService } from './getbillbyname.service';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css'],
})
export class GenerateBillComponent implements OnInit {
  constructor(private _bill: GetbillbynameService,private _coustomername:GetcartserviceService) {}
  inputTitle: any;
  billdata: any;
  finduserBill: any;
  flag: boolean = false;
  ngOnInit(): void {
    this.getBill();
  }
  getBill() {
    this._coustomername.getcart().subscribe((data) => {
      this. finduserBill = data;
      console.log;
    });
  }

  // getSearch() {
  //     if (this.inputTitle) {
  //       this.finduserBill = this.billdata.filter((arr: any) => {
  //         return arr.name === this.inputTitle;
  //       });
  //       this.flag = true;
  //     } else {
  //       this.finduserBill = this.billdata;
  //     }
  //   }
  getSearch() {
     this._bill.getbill(this.inputTitle).subscribe((data)=>{this.billdata=data
      this.flag=true;
      
        alert("Bill Generated Successfully");
      
      
 })

      
  }
}
