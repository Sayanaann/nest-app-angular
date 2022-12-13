import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminintloginComponent } from './adminintlogin/adminintlogin.component';
import { AdminintnavComponent } from './adminintnav/adminintnav.component';
import { AddemployeeComponent } from './addemployee/addemployee.component'

const myRoute:Routes=[
{
  path:"",
  component:AdminintloginComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    AdminintloginComponent,
    AdminintnavComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
