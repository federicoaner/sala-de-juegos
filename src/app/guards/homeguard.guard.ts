import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUserService } from '../sericios/login-user.service';


@Injectable({
  providedIn: 'root'
})
export class HomeguardGuard implements CanActivate {

  constructor(public auth: LoginUserService, public router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(!this.auth.logged)
      { 
        this.router.navigate(['login']);
        return false;
      }
      
      return true;
    
  }
  
}
