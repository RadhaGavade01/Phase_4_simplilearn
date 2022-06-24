import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CakeService {
  constructor(private https:HttpClient) {

   }

  login(url:any,body:any){
    return this.https.post(url,body)
  }

  post(url:any,body:any){
      return this.https.post(url,body)
  }

  ascending(data:any,property:string){
    data.sort((obj1:any,obj2:any)=>{
      return obj1[property] - obj2[property];
    })
    return data
  }

  descending(data:any,property:string){
    data.sort((obj1:any,obj2:any)=>{
      return obj2[property]-obj1[property];
    })
    return data
  }

  getCakeDetail(url:string){
    return this.https.get(url)
  }

  search(url:any){
    return this.https.get(url)
  }
  
  cartItems:any
  price:any
  userDetails:any
  
  cake_post(url:any,body:any){
    let myHeader=new HttpHeaders()
    myHeader=myHeader.append('authtoken',localStorage["token"])
    let options={headers:myHeader}
    
    return this.https.post(url,body,options)
  }

}
