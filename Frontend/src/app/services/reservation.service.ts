import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservations: any;

  constructor(private http: HttpClient) { }

  addReservation(car: any) {
    return this.http.post<any>('http://localhost:3000/reservations/addreservations', car)
      .pipe(map(data => {
        return data;
      }));
  }

  getReservations() {
    return this.http.get<any>('http://localhost:3000/reservations/get')
      .pipe(map(data => {
        if (data) {
          this.reservations = data;
          console.log(this.reservations);
        }
        return this.reservations;
      }));
    }
}
