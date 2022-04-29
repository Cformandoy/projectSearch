import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SettingsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
