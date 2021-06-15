import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  reservations: any

  constructor(private reservation: ReservationService) {
    this.onLoading();
  }

  ngOnInit(): void {
  }

  onLoading(){
    try {
      this.reservation.getReservations().subscribe(
        data => {
          console.log(data)
          this.reservations = data;
        },
        err => {
          console.log(err)
        });
    } catch (error) {
      console.log(error)
    }
  }

}
