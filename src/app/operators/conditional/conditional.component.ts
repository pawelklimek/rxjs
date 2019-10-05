import {Component} from '@angular/core';
import {delay, every, find, findIndex, isEmpty, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {OperatorsService} from '../operators.service';



@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent {

  numbers$ = of(1, 2, 3, 4, 5, 6).pipe(delay(1000));
  numbersAll$ = this.numbers$.pipe(OperatorsService.showAllEmittedValues());
  everyGreaterThanFive$ = this.numbers$.pipe(every(value => value > 5));
  everyGreaterOrEqualOne$ = this.numbers$.pipe(every(value => value >= 1));
  findGreaterThanFour$ = this.numbers$.pipe(find(value => value >= 4));
  findEvenNumber$ = this.numbers$.pipe(findIndex(value => value % 2 === 0));
  isEmpty$ = of().pipe(isEmpty());
}
