import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { VocabularyWord } from '../vocabularyWord';
import { WordService } from '../word.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService:UserService, private wordService:WordService) {}

  serverAnswer:boolean;

  canActivate(){
    const user = this.userService.userValue;
    
    if (user) {
      // authorised so return true
      console.log('Guard alowes you to vicit /vocabulary ' + user);
      
      return true;
  }

    this.router.navigateByUrl("/logIn");
    console.log('Guard doesn`t alowe you to vicit /vocabulary. Please log in' + user);
        return false;
  }
}
