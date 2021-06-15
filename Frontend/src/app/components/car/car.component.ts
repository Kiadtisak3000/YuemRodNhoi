import { Component, OnInit } from '@angular/core';
import { CarsService  } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

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
