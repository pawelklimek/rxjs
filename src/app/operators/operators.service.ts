import {Injectable} from '@angular/core';
import {MonoTypeOperatorFunction, Observable} from 'rxjs';
import {scan} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {


  public getRandomNumbers(): Observable<number> {
    return new Observable(observable => {
      this.generateNumberWithDelay(observable, 1);
      this.generateNumberWithDelay(observable, 2);
      this.generateNumberWithDelay(observable, 3);
      this.generateNumberWithDelay(observable, 4);
      this.closeAfter(observable, 5);
    });
  }

  public getOddNumbers(): Observable<number> {
    return new Observable(observable => {
      this.getValueWithDelay(observable, 1, 1);
      this.getValueWithDelay(observable, 3, 3);
      this.getValueWithDelay(observable, 5, 5);
      this.closeAfter(observable, 5);
    });
  }

  public getEvenNumbers(): Observable<number> {
    return new Observable(observable => {
      this.getValueWithDelay(observable, 2, 2);
      this.getValueWithDelay(observable, 4, 4);
      this.closeAfter(observable, 4);
    });
  }

  private getValueWithDelay(observable, value: number, timeInSec: number) {
    setTimeout(() => {
      observable.next(value);
    }, timeInSec * 1000);
  }

  private generateNumberWithDelay(observable, timeInSec: number) {
    setTimeout(() => {
      observable.next(this.generateNumber());
    }, timeInSec * 1000);
  }


  private closeAfter(observable, timeInSec: number) {
    setTimeout(() => {
      observable.complete();
    }, timeInSec * 1000);
  }

  private generateNumber(): number {
    return Math.floor(Math.random() * 100).valueOf() + 1;
  }

 public static showAllEmittedValues(): MonoTypeOperatorFunction<any> {
    return scan((acc, value) => [...acc, value], []);
  }
}
