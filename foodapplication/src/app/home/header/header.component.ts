import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginadminComponent } from 'src/app/loginadmin/loginadmin.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _dialog: MatDialog,) { }
userEmail:any;
status:boolean=false;
  ngOnInit(): void {
    this.loginCheck();
  }
  loginCheck(){
    let email=localStorage.getItem('email')
    this.userEmail=email;
    if(email){
      this.status=true;
      return this.status
    }else{
      this.status=false;
      return this.status;
    }
  }
  logout() {
    localStorage.removeItem('email');
    return this.status=false;
    // localStorage.removeItem('username');
    // this._router.navigate(['home']);
  }

  

}
