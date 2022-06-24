
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CakeService } from 'src/app/service.service';


@Component({
  selector: 'app-previous-cakes-details',
  templateUrl: './previous-cakes-details.component.html',
  styleUrls: ['./previous-cakes-details.component.css']
})
export class PreviousCakesDetailsComponent implements OnInit {

  id:any
  orders:any=[]
  orderId:any
  totalprice:any

  constructor(private route:ActivatedRoute,private service: CakeService) {
      this.id=this.route.snapshot.params["id"]
      let url="https://apifromashu.herokuapp.com/api/cakeorders"
      this.service.cake_post(url,{}).subscribe({
        next:(response:any)=>{
          if(response){
            this.orders=response.cakeorders[this.id].cakes
            this.orderId=response.cakeorders[this.id].orderid
            this.totalprice=response.cakeorders[this.id].price
          }
        }
      })
      // console.log(typeof(this.orders))
   }

  ngOnInit(): void {
  }

}
