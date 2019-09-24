import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CarService} from '../car/car.service';
import {Car} from '../car/car';
import {multicast, refCount} from 'rxjs/operators';

@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.component.html',
  styleUrls: ['./sharing.component.css']
})
export class SharingComponent implements OnInit {


  ngOnInit() {
    this.randomNumbers().subscribe(console.log)
  };

  public randomNumbers(): Observable<number> {
    return new Observable(observable => {

      setInterval(() => {
        observable.next(this.getRandomNumber())
      }, 1000);

      setInterval(() => {
        observable.complete()
      }, 4000);
    });
  }

  private getRandomNumber() {
    return Math.floor(Math.random() * 100).valueOf() + 1;
  }

}
