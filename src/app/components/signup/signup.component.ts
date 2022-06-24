import { Component, OnInit,} from '@angular/core';
import { CakeService } from 'src/app/service.service';
import { ToastrService } from 'ngx-toastr';
import {FormBuilder,FormGroup, Validators} from "@angular/forms"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userDetail:any={}

  responseError:any
  signupForm:any
  users: any=[];


  constructor(private service : CakeService,private toaster:ToastrService,private formbuilder:FormBuilder) { 
      this.signupForm=this.formbuilder.group({
        email:["",[Validators.required,Validators.email ]],
        name:["",[Validators.required]],
        password:["",[Validators.required]],
        pincode:["",[Validators.required,Validators.maxLength(6),Validators.minLength(6)]],
      })

  }

  
  signup(){
    if(this.signupForm.valid){
      this.toaster.success("Your form is valid")
    }
  }
  
  addUser(){
    console.log(this.userDetail)
  
    var url='https://apifromashu.herokuapp.com/api/register'
    this.service.post(url,this.userDetail).subscribe({
      next:(response:any)=>{
        console.log(response.message)
        this.responseError=response.message
      },
      error:(error)=>{
        console.log("Error",error)
      }
    })
    var user={...this.userDetail}
    this.users.push(user)
    // console.log(this.users)
  }

  deleteUser(email:String){
    this.users=this.users.filter( (user: { email: String; }) =>user.email!==email)
  }
  
  ngOnInit(): void {
  
  }

  
}
