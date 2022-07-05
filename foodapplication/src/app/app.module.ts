import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { MaterialComponentModule } from './material-component/material-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import{ HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './home/footer/footer.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { SouthIndianComponent } from './south-indian/south-indian.component';
import { NorthIndianComponent } from './north-indian/north-indian.component';
import { ChineseFoodComponent } from './chinese-food/chinese-food.component';
import { AddcartformComponent } from './home/addcartform/addcartform.component';
import {MatMenuModule} from '@angular/material/menu';
import { GetCartComponent } from './get-cart/get-cart.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginadminComponent,
    AdmindashboardComponent,
    FooterComponent,
    CategoryComponent,
    SouthIndianComponent,
    NorthIndianComponent,
    ChineseFoodComponent,
    AddcartformComponent,
    GetCartComponent,
    GenerateBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MaterialComponentModule,AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
