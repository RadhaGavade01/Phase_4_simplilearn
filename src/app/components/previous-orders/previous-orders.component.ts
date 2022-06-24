import { Component, OnInit } from '@angular/core';
import { CakeService } from 'src/app/service.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.css']
})
export class PreviousOrdersComponent implements OnInit {

  previous_orders:any;
  constructor(private service: CakeService,private router:Router) {
    let url="https://apifromashu.herokuapp.com/api/cakeorders"
    this.service.cake_post(url,{}).subscribe({
      next:(response:any)=>{
        if(response){
          this.previous_orders = response.cakeorders;
          console.log(this.previous_orders)
        }
      },
      error:(error)=>{
        console.log("Error",error)
      }
    })
   }

   viewpreviousCakeoders(id:number){
      this.router.navigate(["/previous-cakes",id])
   }

  

  ngOnInit(): void {
  }

}
