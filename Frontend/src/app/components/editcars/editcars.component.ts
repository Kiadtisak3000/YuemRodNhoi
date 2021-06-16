import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarsService  } from 'src/app/services/cars.service';

@Component({
  selector: 'app-editcars',
  templateUrl: './editcars.component.html',
  styleUrls: ['./editcars.component.css']
})
export class EditcarsComponent implements OnInit {

  show : boolean = !true;
  cars: any
  previewLoaded: boolean = false;
  carID: string | any
  img: string | any
 
    
    

  carForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });

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

  updateCar(){
   console.log("say "+this.carID + this.carForm.value) 
   this.car.updateCar(this.carID,this.carForm.value)
  }

  edit(carsID:any,carBody : any){
    this.show = !this.show;

    console.log("Form " + this.carForm)
    console.log("carid1  " + carsID );
    this.carID = carsID
    console.log("carid2  " + carBody );
  }

  delete(id:any){
    console.log("carid  " + id)
    this.car.deleteCar(id);
  }

  onChangeImg(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      var pattern = /image-*/;
      const reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        this.carForm.reset();
      } else {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previewLoaded = true;
          this.carForm.patchValue({
            img: reader.result
          });
        };
      }
    }
  }

  resetForm() {
    this.carForm.reset();
    this.previewLoaded = false;
  }
}
