import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {


  constructor(private router: Router){

  }
  canActivate(){
    if(localStorage['token']){
        this.router.navigate([""])
        return false
    } 

    return true
  }
  
}
