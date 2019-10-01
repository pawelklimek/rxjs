import {Component, OnInit} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {combineAll, concatAll, exhaust, map, mergeAll, startWith, withLatestFrom} from 'rxjs/operators';
import {OperatorsService} from '../operators.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {


  exhaust$ = new Observable<any>();
  mergeAll$ = new Observable<any>();
  combineAll$ = new Observable<any>();
  concatAll$ = new Observable<any>();
  startWith$ = new Observable<any>();
  withLatestFrom$ = new Observable<any>();


  constructor(private operatorsService: OperatorsService) {
  }

  ngOnInit() {
    let button = document.querySelector('.emit-button-join');
    let buttonEvent$ = fromEvent(button, 'click');

    const emitLetterAfterClick = buttonEvent$.pipe(map(() => this.operatorsService.getAlphabet()));
    this.exhaust$ = emitLetterAfterClick.pipe(exhaust(), OperatorsService.showAllEmittedValues());
    this.concatAll$ = emitLetterAfterClick.pipe(concatAll(), OperatorsService.showAllEmittedValues());
    this.mergeAll$ = emitLetterAfterClick.pipe(mergeAll(), OperatorsService.showAllEmittedValues());
    this.startWith$ = this.operatorsService.getAlphabet().pipe(startWith('X'), OperatorsService.showAllEmittedValues());
    this.withLatestFrom$ = this.operatorsService.getAlphabet().pipe(withLatestFrom(this.operatorsService.getOddNumbers()),OperatorsService.showAllEmittedValues());


  }
}
