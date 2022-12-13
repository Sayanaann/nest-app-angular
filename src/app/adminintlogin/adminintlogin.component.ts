import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminintlogin',
  templateUrl: './adminintlogin.component.html',
  styleUrls: ['./adminintlogin.component.css']
})
export class AdminintloginComponent {
  username=""
  password=""
  
  constructor(private route:Router){}

  login=()=>
  {
let data : any ={  "username": this.username,
"password":this.password}
  
  console.log(data)
   
  if (this.username=="admin"&& this.password=="12345") {
     
     this.route.navigate(['/addemployee'])
    
    
  } else {

      alert("invalid credentials")
    
  }


  }
}
