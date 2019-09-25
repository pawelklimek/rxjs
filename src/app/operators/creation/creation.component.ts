import { Component, OnInit } from '@angular/core';
import {from, generate, of, range} from 'rxjs';
import {scan} from 'rxjs/operators';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  of$ = of(1, 2, 3).pipe(this.showAllEmittedValues());

  range$ = range(0, 5)
    .pipe(this.showAllEmittedValues());
  generate$ = generate({
    initialState: 0,
    condition: x => x < 10,
    iterate: x => x + 1
  }).pipe(this.showAllEmittedValues());

  from$ = from([1, 2, 3])
    .pipe(this.showAllEmittedValues());


  private showAllEmittedValues() {
    return scan((acc, value) => [...acc, value], []);
  }

}
