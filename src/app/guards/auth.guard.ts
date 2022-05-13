import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard /* implements CanLoad */ {

  constructor() {}

  /* canLoad(){
    const isAutenticated: = !!(+localStorage.getItem('authenticated'));

    if(isAutenticated){
      return true;
    }else{
      return false;
    }
  } */
}
