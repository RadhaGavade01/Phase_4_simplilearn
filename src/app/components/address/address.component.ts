import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FormBuilder,FormGroup, Validators} from "@angular/forms"
import {Router} from '@angular/router';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  userDetail:any={

  }
  addressform:any

  
  constructor(private toaster:ToastrService,private formbuilder:FormBuilder,private router:Router) { 
      this.addressform=this.formbuilder.group({
        name:["",[Validators.required]],
        address:["",[Validators.required]],
        city:["",[Validators.required]],
        pincode:["",[Validators.required,Validators.maxLength(6),Validators.minLength(6)]],
        phone_no:["",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]]
      })
  } 


  addAddress(){
    if(this.addressform.valid){
      localStorage.setItem('user_address',JSON.stringify(this.userDetail))
      this.toaster.success("Address is succesfully added!")
      this.router.navigate(["payment"])
      
    }
    else{
      this.toaster.error("Fill in the detail appropirately")
    }
   
  }
  ngOnInit(): void {
  }

}
