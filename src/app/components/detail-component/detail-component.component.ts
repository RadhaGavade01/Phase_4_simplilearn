import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router"
import {CakeService} from "src/app/service.service"
import {HttpHeaders} from "@angular/common/http"
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponent implements OnInit {

  cakeId:any;
  cakeData:any={}
  isadding:boolean=false
  isAdding:boolean=false

  constructor(private route : ActivatedRoute,private router:Router, private service :CakeService,private toaster:ToastrService) { 
    
    this.cakeId = this.route.snapshot.params["cakeid"]
    console.log(this.cakeId)
    var url="https://apifromashu.herokuapp.com/api/cake/"+this.cakeId
    
    this.service.getCakeDetail(url).subscribe({

      next:(response:any)=>{
        console.log(response)
        this.cakeData=response.data
        console.log("Cake data",this.cakeData)
      },
      error:(error)=>{
        console.log("Error from cake Details api",error)
      }
    })

  }

  addToCart(){
    if(localStorage["token"]){
    this.isAdding=true
    var body :any={
        cakeid:this.cakeData.cakeid,
        name:this.cakeData.name,
        weight:this.cakeData.weight,
        price:this.cakeData.price,
        image:this.cakeData.image,
      }
    
    var url="https://apifromashu.herokuapp.com/api/addcaketocart"
      this.service.cake_post(url,body).subscribe({
      next:(response:any)=>{
        console.log(response)
        this.isAdding=false
        this.router.navigate(["/cart"])
        
      },
      error:(error)=>{
        console.log(error)
      }
    })
    }
    else{
      this.router.navigate(["/login"])
    }
    
  }

  ngOnInit(): void {
  }

}
