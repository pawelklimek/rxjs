import {Component, OnInit} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {concatAll, exhaust, map, mergeAll, startWith, withLatestFrom} from 'rxjs/operators';
import {OperatorsService} from '../operators.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {


  alphabet$ = this.operatorsService.getAlphabet();
  oddNumbers$ = this.operatorsService.getOddNumbers();
  oddNumbersAll$ = this.oddNumbers$.pipe(OperatorsService.showAllEmittedValues());

  alphabetAll$ = this.alphabet$.pipe(OperatorsService.showAllEmittedValues());
  exhaust$ = new Observable<any>();
  mergeAll$ = new Observable<any>();
  concatAll$ = new Observable<any>();
  startWith$ = new Observable<any>();
  withLatestFrom$ = new Observable<any>();
  emitLettersAfterClick$ = new Observable<any>();


  constructor(private operatorsService: OperatorsService) {
  }

  ngOnInit() {
    let button = document.querySelector('.emit-button-join');
    let buttonEvent$ = fromEvent(button, 'click');

    this.emitLettersAfterClick$ = buttonEvent$.pipe(map(() => this.alphabet$));

    this.exhaust$ = this.emitLettersAfterClick$.pipe(exhaust(), OperatorsService.showAllEmittedValues());
    this.concatAll$ = this.emitLettersAfterClick$.pipe(concatAll(), OperatorsService.showAllEmittedValues());
    this.mergeAll$ = this.emitLettersAfterClick$.pipe(mergeAll(), OperatorsService.showAllEmittedValues());
    this.startWith$ = this.alphabet$.pipe(startWith('X'), OperatorsService.showAllEmittedValues());
    this.withLatestFrom$ = this.alphabet$.pipe(withLatestFrom(this.oddNumbers$), OperatorsService.showAllEmittedValues());


  }
}
