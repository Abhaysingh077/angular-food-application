import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ChineseFoodComponent } from './chinese-food/chinese-food.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { GetCartComponent } from './get-cart/get-cart.component';
import { HomeComponent } from './home/home.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { NorthIndianComponent } from './north-indian/north-indian.component';
import { SouthIndianComponent } from './south-indian/south-indian.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginadminComponent },
  { path: 'admin', component: AdmindashboardComponent },
  { path: 'south_indian', component: SouthIndianComponent },
  { path: 'north_indian', component: NorthIndianComponent },
  { path: 'chinese_food', component: ChineseFoodComponent },
  { path: 'getcart', component: GetCartComponent },
  {path:'generate_bill',component:GenerateBillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
