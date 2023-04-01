import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularHomeComponent } from './angular/angular-home/angular-home.component';
import { AngularComponent } from './angular/angular.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'Angular',
    component:AngularComponent
  },
  {
    path:'angular-home',
    component:AngularHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
