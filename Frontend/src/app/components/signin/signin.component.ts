import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouteGuardService } from 'src/app/services/route-guard.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  user : any;
  pwd: any;


  constructor(private auth: AuthService, private router: Router, private RouteGuardService: RouteGuardService) {
   
  }
  ngOnInit(): void {
  }


  signin() {
    console.log(this.authForm.value);
    this.auth.signIn(this.authForm.value).subscribe(
      (data) => {
        this.user = data.result.username;
        this.pwd = data.result.password;
        console.log("See This " + data.result.username)
        console.log("See this " + this.authForm.get('username')?.value);
        if (data.status == true) {
          
          this.authenticateUser(this.authForm.get('username')?.value,this.authForm.get('password')?.value)
        
        } else {
          alert('username or password is incorrect');
        }
      },
      (err) => {
        console.log(err);
        alert('username or password is incorrect');
      }
    );
  }

  authenticateUser(userName: any, password: any){
    console.log("See" + userName)
    if(userName == "admin"  ){
      this.router.navigate(['/pending']);
      console.log("check 1" + this.user)
      this.RouteGuardService.getForm(this.user)
    } else { 
      this.router.navigate(['/homepage']);
      console.log("check 2" + this.user)
      this.RouteGuardService.getForm(this.user)
  }
}

  signup() {
    this.router.navigate(['/signup']);
  }
}
