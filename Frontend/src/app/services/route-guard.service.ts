import { Injectable } from '@angular/core';
import {  Router,CanActivate, ActivatedRouteSnapshot,CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'angular-web-storage';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate , CanActivateChild  {

  user:any;

  constructor(private router:Router,private authService: AuthService) {}

  getForm(user : any){
   this.user = user;
  }

  canActivate(route: ActivatedRouteSnapshot){
    console.log("check 1" + this.user)
    if(this.user == "admin"){
      return true
    }else{
      return false
    }    
  }

  canActivateChild(route: ActivatedRouteSnapshot) {
    console.log("check 1" )
    return false;
  }
}
