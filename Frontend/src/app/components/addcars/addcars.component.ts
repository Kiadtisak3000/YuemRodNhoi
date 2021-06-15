import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarsService } from 'src/app/services/cars.service'; 

@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css']
})
export class AddcarsComponent implements OnInit {

  carType: string[] = ['รถยนต์', 'รถจักรยานยนต์', 'รถตู้'];

  carForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    licensePlate: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });

  previewLoaded: boolean = false;

  constructor(private cs: CarsService) { 
  }

  ngOnInit(): void {
  }

  addCar() {
    this.cs.addCar(this.carForm.value).subscribe(
      data => {
        console.log(data)
        alert('car added successfully');
        this.carForm.reset();
      },
      err => {
        console.log(err);
      });
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
