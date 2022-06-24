import { Component, OnInit } from '@angular/core';
import { CakeService } from 'src/app/service.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : CakeService,private router:Router) { }
  
  responseError:any
  userDetail:any={}

  login(){
    var url="https://apifromashu.herokuapp.com/api/login"
    console.log(this.userDetail)
    this.service.login(url,this.userDetail).subscribe({
      next:(response : any)=>{
          if(response.token){
              localStorage["token"]=response.token
              localStorage["loggeinUser"]=response.email

              var url="https://apifromashu.herokuapp.com/api/cakecart"
              this.service.cake_post(url,{}).subscribe({
                next:(response : any)=>{
                  this.service.cartItems=response.data

                },
                error:(error)=>{
                  console.log("Error from getcart API",error)
                }
              })
              console.log(localStorage["token"])
              this.router.navigate([""])
          }
          else{
            this.responseError="Invalid Login"
          }
      },
      error:(err)=>{
          console.log(err)
      } 
    })
  }

  ngOnInit(): void {
  }

}
