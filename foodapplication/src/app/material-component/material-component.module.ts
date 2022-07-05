import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


const MaterialComponent = [MatButtonModule,MatDialogModule,MatCardModule,MatSidenavModule,MatIconModule];
@NgModule({
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialComponentModule { }
