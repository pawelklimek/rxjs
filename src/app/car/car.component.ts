import {Component, OnInit} from '@angular/core';
import {CarService} from './car.service';
import {Observable} from 'rxjs';
import {Car} from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carObservable$: Observable<Car[]>;


  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carObservable$ = this.carService.getCars();


    // this.carObservable$.subscribe(
    //   (cars) => console.log('all VW cars', cars),
    //   (error) => console.log('no cars', error),
    //   () => console.log('complete, no more data')
    // );






    let observer = {
      next: function (value) {
        console.log('I got car: ', value)
      },
      error: function (value) {
        console.log('No cars: ', value)
      },
      complete: function () {
        console.log("The factory is closed for today")
      }
    };

    this.carObservable$.subscribe(observer);


  }

}
