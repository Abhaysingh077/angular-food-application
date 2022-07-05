import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css'],
})
export class LoginadminComponent implements OnInit {
  constructor(private _router: Router) {}
  loginform: any;
  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  loginadmin() {
    if (
      this.loginform.value.email === 'admin@gmail.com' &&
      this.loginform.value.password === '123456'
    ) {
      console.log(this.loginform.value.email);
      localStorage.setItem('email', this.loginform.value.email);
      alert('Login Successful');
      this._router.navigate(['admin']);
    } else {
      alert('Login Failed');
    }
  }

  // loginAdmin() {
  //   this._httplogin.getAdmin().subscribe((data: any) => {
  //     this.admin = data.find((adminData: any) => {
  //       return (
  //         adminData.username === this.loginform.value.username &&
  //         adminData.password === this.loginform.value.password
  //       );
  //     });
  //     if (this.admin) {
  //       alert('login success!');
  //       localStorage.setItem('username', this.admin.username);
  //       this._route.navigate([
  //         'admin',
  //         this.admin.id,
  //         this.admin.username,
  //         this.admin.name,
  //         this.admin.gender,
  //         this.admin.dob,
  //         this.admin.photo,
  //       ]);
  //     } else {
  //       alert('Please Fill Data Correct');
  //     }
  //   });
  // }
}
