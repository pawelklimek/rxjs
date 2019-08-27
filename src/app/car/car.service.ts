import {Injectable} from '@angular/core';
import {Car} from './car';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() {
  }

  cars: Car[] = [
    new Car(1, 'PASSAT', 'sedan', 100000, 'Adam'),
    new Car(2, 'POLO', 'compact', 60000, 'Mirek'),
    new Car(3, 'PASSAT V8', 'sedan', 120000, 'Damian'),
    new Car(4, 'GOLF', 'sedan', 990000, 'Krzysztof'),
    new Car(5, 'GOLF', 'compact', 60000, 'Roman'),
    new Car(6, 'GOLF', 'compact', 80000, 'Pawel'),
    new Car(7, 'T-ROC', 'suv', 950000, 'Wanda'),
    new Car(8, 'GOLF', 'compact', 80000, 'Sylwek'),
    new Car(9, 'UP', 'compact', 40000, 'Jakub'),
    new Car(10, 'Arteon', 'sport', 150000, 'Monika'),
    new Car(14, 'UP', 'sport', 100000, 'Robet')

  ];

  public getCars(): any {
    return new Observable(observer => {

      this.cars.forEach(car => {
        setTimeout(() => {
          observer.next(car);
        }, CarService.getTimeInMilliseconds(car.productionHour));
      });

      setTimeout(() => {
        observer.error('No power at the factory!');
      }, 5000);

      setTimeout(() => {
        observer.complete();
      }, CarService.getTimeInMilliseconds(12));
    });
  }


  static getTimeInMilliseconds(sec: number) {
    return sec * 1000;
  }
}
