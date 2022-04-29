import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SettingsComponent } from './pages/settings/settings.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
   path:'about',
   component:AboutComponent
 },
 {
   path:'settings',
   component:SettingsComponent
 },
 {
   path:'',
   redirectTo:'home',
   pathMatch: 'full'
 },
 {
   path:'**',
   component:NotFoundComponent
 }
 
 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
