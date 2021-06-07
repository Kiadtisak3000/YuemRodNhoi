import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    dateofbirth: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signin() {
    console.log(this.authForm.value);
    this.auth.signIn(this.authForm.value).subscribe(
      (data) => {
        console.log(data);
        if (data.status == true) {
          this.router.navigate(['/homepage']);
        } else {
          alert('False');
        }
      },
      (err) => {
        console.log(err);
        alert('username or password is incorrect');
      }
    );
  }

  signup() {
    console.log(this.authForm.value);

    this.auth.signUp(this.authForm.value).subscribe((data) => {
      this.router.navigate(['/signin']);
      /* console.log(data);
        console.log(data.status + 'check');
        if (data.status == true) {
          this.router.navigate(['/singin']);
        } else {
          alert('False');
          console.log(this.authForm.value);
        }
      },
      (err) => {
        console.log(err);
        alert('username or password is incorrect');
        console.log(this.authForm.value); */
    });
  }
}
