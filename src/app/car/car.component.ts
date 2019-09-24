import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  public numbers(): any {
    return new Observable(observable => {

      setInterval(() => {
        observable.next(Math.random() * 1000)
      }, 1000);

      setInterval(() => {
        observable.complete()
      }, 3000);
    });
  }

  ngOnInit() {
    this.numbers().pipe().subscribe(el => console.log("subscriber 1:", el));
    this.numbers().pipe().subscribe(el => console.log("subscriber 2:", el));
  }

}
