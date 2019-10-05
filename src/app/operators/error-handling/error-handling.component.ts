import {Component} from '@angular/core';
import {of} from 'rxjs';
import {OperatorsService} from '../operators.service';
import {catchError, map, retry} from 'rxjs/operators';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent {

  alphabet$ = this.operatorsService.getAlphabet();
  alphabetAll$ = this.alphabet$.pipe(OperatorsService.showAllEmittedValues());

  catchError$ = this.alphabet$.pipe(
    map(letter => {
        if (letter === 'D') {throw 'D';}return letter}),
    catchError(() => of('Error D was there!')),
    OperatorsService.showAllEmittedValues());

  retry$ = this.alphabet$.pipe(
    map(letter => {
        if (letter === 'D') {throw 'D';}return letter}),
    retry(2),
    catchError(() => of('Error D was there!')),
    OperatorsService.showAllEmittedValues());

  constructor(private operatorsService: OperatorsService) {
  }
}
