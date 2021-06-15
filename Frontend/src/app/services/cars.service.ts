import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars: any;

  constructor(private http: HttpClient) { }

  addCar(car: any) {
    return this.http.post<any>('http://localhost:3000/cars/addcars', car)
      .pipe(map(data => {
        return data;
      }));
  }

  getCars() {
    return this.http.get<any>('http://localhost:3000/cars/get')
      .pipe(map(data => {
        if (data) {
          this.cars = data;
          console.log(this.cars);
        }
        return this.cars;
      }));
    }
}
