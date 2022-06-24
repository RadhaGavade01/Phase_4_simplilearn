import { Component, Input,OnInit } from '@angular/core';
import {Cake} from "src/app/Cake"
import {CakeService} from 'src/app/service.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";



@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  signupForm:any

  @Input() cakedata!:Cake
  constructor(private service:CakeService,private toaster: ToastrService,private router:Router) { }
  

  detail(){
    console.log("Testing")
    this.router.navigate(
      ["detail/",this.cakedata.cakeid] )

  }

  ngOnInit(): void {
  }

}
