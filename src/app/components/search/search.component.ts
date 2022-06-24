import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {CakeService} from "src/app/service.service"



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchItems:any=[]
  constructor(private service: CakeService,private router:ActivatedRoute) {
    //  var searchText=this.router.snapshot.queryParams["q"]
    //  console.log("Search text",searchText)
    //  var url="https://apifromashu.herokuapp.com/api/searchcakes?q="+searchText

    //  this.service.search(url).subscribe({
    //    next:(response :any)=>{
    //      console.log(response)
    //      this.searchItems=response.data
    //    },
    //    error:(error)=>{
    //      console.log(error)
    //    }

    //  })
   this.router.queryParams.subscribe((query:any)=>{
     var searchText=query["q"]
     var url="https://apifromashu.herokuapp.com/api/searchcakes?q="+searchText
     this.service.search(url).subscribe({
       next:(response :any)=>{
         console.log("Response from Search API",response.data)
          this.searchItems=response.data
       },
       error:(error)=>{
         console.log("Error from Search API",error)
       }
     })
   })
   }

  ngOnInit(): void {
    
  }

}
