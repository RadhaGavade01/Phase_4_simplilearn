import { Component, OnInit } from '@angular/core';
import {Cake} from "src/app/Cake"
import { CakeService } from 'src/app/service.service';
import { ToastrService } from 'ngx-toastr';
import {HttpClient} from "@angular/common/http"
import {NgxUiLoaderService} from 'ngx-ui-loader'

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {

  //Defines array of object called cakes with data type Cake 
  cakes!: Cake[];

  //Initializa the service
  constructor(
    private service:CakeService,
    private https: HttpClient,
) 
    {
      
      var url='https://apifromashu.herokuapp.com/api/allcakes'

      this.https.get(url).subscribe({
        next:(response:any) => {
          console.log(response)
          this.cakes=response.data
        },
        error:(error)=>{
          console.log(error.message)
        }
      })
  

  }

  //Services
  ascSort(){
    this.cakes=this.service.ascending(this.cakes,"price")
  }

  dscSort(){
    this.cakes=this.service.descending(this.cakes,"price")
    
  }

  
  ngOnInit(): void {
   
  }

}
