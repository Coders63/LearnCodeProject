import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { DotNetCoreComponent } from './dot-net-core/dot-net-core.component';
import { DotNetCoreMvcComponent } from './dot-net-core-mvc/dot-net-core-mvc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AngularComponent,
    DotNetCoreComponent,
    DotNetCoreMvcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
