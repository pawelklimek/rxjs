import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {


  public getRandomNumbers(): Observable<number> {
    return new Observable(observable => {
      this.sendValueAfterTimeout(observable, 1);
      this.sendValueAfterTimeout(observable, 2);
      this.sendValueAfterTimeout(observable, 3);
      this.sendValueAfterTimeout(observable, 4);
      this.closeAfter5sec(observable);
    });
  }
  private sendValueAfterTimeout(observable, timeInSec: number) {
    setTimeout(() => {
      observable.next(this.generateNumber());
    }, timeInSec * 1000);
  }

  private closeAfter5sec(observable) {
    setTimeout(() => {
      observable.complete();
    }, 5000);
  }

  private generateNumber(): number {
    return Math.floor(Math.random() * 100).valueOf() + 1;
  }
}
