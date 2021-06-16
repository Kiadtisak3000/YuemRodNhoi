import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'angular-web-storage';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  user:any;

  constructor(private auth: AuthService,private authService: AuthService) {}

  getForm(user : any){
   this.user = user;
  }

  public canActivate(route: ActivatedRouteSnapshot){
    console.log("check" + this.user)
    if(this.user == "admin"){
      return true
    }else{
      return false
    }    
  }

  public canActivateChild(route: ActivatedRouteSnapshot){
    console.log("check" + this.user)
    if(this.user ){
      return true
    }else{
      return false
    }    
  }
}
