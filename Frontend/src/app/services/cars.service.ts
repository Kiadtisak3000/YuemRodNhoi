import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars: any;
  postId: any;
  errorMessage: any;
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

  deleteCar(carID: any){
      const http='http://localhost:3000/cars/deletecars/'+carID;
      console.log(http)
      this.http.delete<any>(http).subscribe((ok)=>{console.log(ok)});
      window.location.reload(); 
    }

  updateCar(carID:any, carBody:any){
    console.log("read "+carID + " read 2 " +carBody)
    const http='http://localhost:3000/cars/updatecar/'+carID;
    this.http.put<any>(http, carBody,).subscribe(response => {});
    window.location.reload();   
  }
}
