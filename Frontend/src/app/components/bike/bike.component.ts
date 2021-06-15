import { Component, OnInit } from '@angular/core';
import { CarsService  } from 'src/app/services/cars.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  cars: any

  constructor(private car: CarsService) {
    this.onLoading();
   }

  ngOnInit(): void {
  }
  onLoading(){
    try {
      this.car.getCars().subscribe(
        data => {
          console.log(data)
          this.cars = data;
        },
        err => {
          console.log(err)
        });
    } catch (error) {
      console.log(error)
    }
  }
}

