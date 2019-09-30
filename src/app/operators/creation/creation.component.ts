import {Component, OnInit} from '@angular/core';
import {from, fromEvent, generate, interval, Observable, of, range, throwError, timer} from 'rxjs';
import {OperatorsService} from '../operators.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit{


   fromEvent$ = new Observable<any>();

  of$ = of(1, 2, 3).pipe(OperatorsService.showAllEmittedValues());

  range$ = range(0, 5).pipe(OperatorsService.showAllEmittedValues());
  generate$ = generate({
    initialState: 0,
    condition: x => x < 10,
    iterate: x => x + 1
  }).pipe(OperatorsService.showAllEmittedValues());

  from$ = from([1, 2, 3]).pipe(OperatorsService.showAllEmittedValues());
  interval$ = interval(2000).pipe(OperatorsService.showAllEmittedValues());
  timer$ = timer(4000, 2000).pipe(OperatorsService.showAllEmittedValues());
  throwError$ = throwError(new Error("Oops! ERROR!"));

  ngOnInit(): void {
     let button = document.querySelector('.emit-button');
     this.fromEvent$ = fromEvent(button, 'click').pipe(map(button => button.timeStamp));
  }
}
