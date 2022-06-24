import { Component, OnInit } from '@angular/core';
import { CakeService } from 'src/app/service.service';
import { ToastrService } from 'ngx-toastr';
import {faSearch,faCartShopping,faSignOut} from "@fortawesome/free-solid-svg-icons"

import {Router} from "@angular/router"


@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css'],
  providers: [CakeService]
})
export class NavabarComponent {

  searchText:string=""
  activeUser:any
  projectTitle="Kitchen story"
  length:any
  faSearch:any = faSearch
  faCartShopping=faCartShopping
  faSignout=faSignOut


  constructor(private service : CakeService , private router:Router) { 
      console.log("Constructor called")
      this.activeUser=localStorage["token"] ? true: false
      if(this.activeUser){
        var url="https://apifromashu.herokuapp.com/api/cakecart"
        this.service.cake_post(url,{}).subscribe({
          
          next:(response:any)=>{
              console.log("Response from cartApi from navbar",response)
              this.service.cartItems=response.data
              this.length=this.service.cartItems?.length
          },
        
        })
      }
  }


  isAdmin:any = false
  adminUsers:any=["hartekarqt55@gmail.com"]

  ngDoCheck(){
    
    this.length=this.service.cartItems?.length
    
    console.log("Length of cartItems",this.length)
    if(localStorage["token"]){
      this.activeUser=true
      console.log(localStorage["loggedinUser"])
      if(this.adminUsers.includes(localStorage["loggeinUser"])){
        console.log("Admin")
        this.isAdmin=true
      }
      else{
        console.log("No admin")
      }
    }
    else{
      this.activeUser=false
      this.isAdmin=false
     
    }

  }

  search(){
    if(this.searchText)
      this.router.navigate(["/search"],{queryParams:{q:this.searchText}})
  } 
  
  logout(){
    localStorage.clear()
    window.location.href="/"

  }
  
  previousorder(){
    let url="https://apifromashu.herokuapp.com/api/cakeorders"
    this.service.cake_post(url,{}).subscribe({
      next:(response:any)=>{
        console.log("response",response)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
