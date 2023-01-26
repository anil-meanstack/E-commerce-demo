import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Data, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:DataService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('seller')) {
      return true
      }
      return this.service.issellerLoggedIn;
  }
  
}
