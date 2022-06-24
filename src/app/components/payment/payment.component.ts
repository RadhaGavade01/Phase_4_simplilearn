import { Component, OnInit } from '@angular/core';
import { CakeService } from 'src/app/service.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cartItems:any=[]
  userDetails:any={

  }
  totalAmount:number = 0
  body:any={}


  constructor(private service:CakeService,private router:Router,private toaster:ToastrService) {

    let url ="https://apifromashu.herokuapp.com/api/cakecart"
    this.service.cake_post(url,{}).subscribe({
      next:(response:any)=>{
        this.cartItems=response.data
        console.log(this.cartItems)
        this.cartItems.map((_item: any)=>{
         this.totalAmount+=_item.quantity * _item.price
        })
      },
      error:(error)=>{
        console.log(error)
      }
    })  

    this.userDetails=localStorage.getItem('user_address')
    this.userDetails=JSON.parse(this.userDetails)

   }

  order(){
    let url="https://apifromashu.herokuapp.com/api/addcakeorder"
    console.log(this.cartItems)
    let body={
      cakes:this.cartItems,
      price:this.totalAmount,
      name:this.userDetails.name,
      address:this.userDetails.address,
      city:this.userDetails.city,
      pincode:this.userDetails.pincode,
      phone:this.userDetails.phone_no
    }
    console.log(body)
    this.service.cake_post(url,body).subscribe({
      next:(response:any) => {
        console.log("On success",response)
        
        this.toaster.success(`You have succesfully placed your order and your order id is ${response["order"].orderid}`)
        this.router.navigate(["/"])
      },

      error:(error)=>{
        console.log(error)
      }
    })
  }
  

  
     
  ngOnInit(): void {
  }

}
