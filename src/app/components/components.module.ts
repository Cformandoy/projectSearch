import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component'



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    MenuComponent,
    FooterComponent

  ]
})
export class ComponentsModule { }
