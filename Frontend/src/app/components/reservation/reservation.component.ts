import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarsService } from 'src/app/services/cars.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  carName: any

  reservationForm = new FormGroup({
    car: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
    option: new FormControl('', [Validators.required]),
    other: new FormControl('', [Validators.required]),
  });

  constructor(private cars: CarsService, private reservations: ReservationService) {
    this.onLoading();
  }

  onLoading() {
    try {
      this.cars.getCars().subscribe(
        data => {
          this.carName = data;
        },
        err => {
          console.log(err)
        });
    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
  }

  addReservation() {
    this.reservations.addReservation(this.reservationForm.value).subscribe(
      data => {
        console.log(data)
        alert('reservation added successfully');
        this.reservationForm.reset();
      },
      err => {
        console.log(err);
      });
  }

  resetForm() {
    this.reservationForm.reset();
  }

}
