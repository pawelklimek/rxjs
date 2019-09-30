import {Component, OnInit} from '@angular/core';
import {OperatorsService} from '../operators.service';

import {buffer, bufferCount, bufferTime, count, map, mapTo, mergeMap, pluck, switchMap} from 'rxjs/operators';
import {fromEvent, interval, Observable, of} from 'rxjs';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.css']
})
export class TransformationComponent implements OnInit {


  buffer$ = new Observable<any>();
  bufferCount$ = new Observable<any>();
  bufferTime$ = new Observable<any>();
  oddNumber$ = this.operatorsService.getOddNumbers();
  evenNumber$ = this.operatorsService.getEvenNumbers();
  oddNumberAll$ = this.oddNumber$.pipe(OperatorsService.showAllEmittedValues());
  evenNumberAll$ = this.evenNumber$.pipe(OperatorsService.showAllEmittedValues());

  map$ = this.oddNumber$.pipe(map(odd => odd * 2), OperatorsService.showAllEmittedValues());
  mapTo$ = this.oddNumber$.pipe(mapTo('A'), OperatorsService.showAllEmittedValues());
  mergeMap$ = this.oddNumber$.pipe(
    mergeMap(odd => this.evenNumber$.pipe( map(even => "ODD: " +  odd + " EVEN " + even))),
    OperatorsService.showAllEmittedValues()
  );
  switchMap$ = this.oddNumber$.pipe(switchMap(odd => this.evenNumber$.pipe(map(even => even + odd))));
  scanListEmittedValues$ = this.oddNumber$.pipe(OperatorsService.showAllEmittedValues());
  numberWrapper = of({number: 1}, {number: 2}, {number: 3});
  pluck$ = this.numberWrapper.pipe(pluck('number'), OperatorsService.showAllEmittedValues());

  constructor(private operatorsService: OperatorsService) {
  }

  ngOnInit(): void {
    let button = document.querySelector('.emit-button-tr');
    let buttonEvent$ = fromEvent(button, 'click');
    this.buffer$ = interval(1000).pipe(buffer(buttonEvent$));
    this.bufferCount$ = interval(1000).pipe(bufferCount(4));
    this.bufferTime$ = interval(1000).pipe(bufferTime(3000));

  }

}
