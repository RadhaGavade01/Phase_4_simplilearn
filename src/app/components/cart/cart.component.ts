import { Component, OnInit } from '@angular/core';
import {CakeService} from "src/app/service.service"
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartItems:any=[]
  totalAmount:number=0
  constructor(private service:CakeService,private router:Router,private loader:NgxUiLoaderService) {
    console.log("called")
        var url="https://apifromashu.herokuapp.com/api/cakecart"
        this.service.cake_post(url,{}).subscribe({
          next:(response:any)=>{
            this.cartItems=response.data
            this.cartItems.map((item:any)=>{
              this.totalAmount+=item.quantity*item.price
            })
          },
          error:(error)=>{
            console.log(error)
          }
        })
   }

   inc_dec(character:string,index:any){
     let body={
       cakeid:this.cartItems[index].cakeid,
     }
     if(character=="-"){
       console.log("decrement has been called")
      this.service.cake_post("https://apifromashu.herokuapp.com/api/removeonecakefromcart",body).subscribe({
        next:(response:any) => {
          if(response && this.cartItems[index].quantity>1){
            console.log(this.cartItems)
            this.totalAmount-=this.cartItems[index].price
            this.cartItems[index].quantity--
            this.loader.stop()
     
          }
          else if(this.cartItems[index].quantity==1 && this.cartItems.length>1){
            this.removefromcart(index)
          }
          else{
            this.cartItems.pop()
          }
        },
        error:(error)=>{
          console.log(error)

        }
      })
     }
     else{
       this.loader.start()
       this.service.cake_post("https://apifromashu.herokuapp.com/api/addcaketocart", this.cartItems[index]).subscribe({
          next:(response:any)=>{
            if(response){
              console.log(this.cartItems)
              this.totalAmount+=this.cartItems[index].price
              this.cartItems[index].quantity+=1;
           
            }
          }
       })
       
     }
   }

  removefromcart(index:any){
    // hit the api
    var body = {
      cakeid:this.cartItems[index]["cakeid"]
    }
    var url = "https://apifromashu.herokuapp.com/api/removecakefromcart"
    this.loader.start()
    this.service.cake_post(url,body).subscribe({
      next:(response:any)=>{
        this.loader.stop()
        console.log("Response from remove from cart api", response)
        if(response.message=="Removed whole cake  item from cart"){
          this.totalAmount = this.totalAmount-this.cartItems[index].quantity*this.cartItems[index].price
          this.cartItems.splice(index,1)
        }
      },
      error:(error:any)=>{
        this.loader.stop()

        console.log("Error from remove from cart api")
      }
    })
 }
   
  ngOnInit(): void {
    this.loader.start();
    
    setTimeout(()=>{
      this.loader.stop()
    },2000)
  }

  ngOnChanges(): void {
    
  }

}
