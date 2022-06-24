import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router: Router){}
  canActivate(){
    if(!localStorage["token"]){
        this.router.navigate(['/login'])
        return false
    }
    return true
  }
  
  
}
