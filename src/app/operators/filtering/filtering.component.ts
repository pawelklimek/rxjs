import {Component, OnInit} from '@angular/core';
import {interval, of} from 'rxjs';
import {OperatorsService} from '../operators.service';
import {
  auditTime,
  debounce,
  debounceTime,
  distinct,
  distinctUntilChanged,
  elementAt,
  filter,
  first,
  last,
  sample, sampleTime, skip, skipLast, skipUntil,
  take, takeLast
} from 'rxjs/operators';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {


  alphabet$ = this.operatorService.getAlphabet();
  auditTime$ = this.alphabet$.pipe(auditTime(2000));
  debounce$ = this.alphabet$.pipe(debounce(() => interval(3000)));
  debounceTime$ = this.alphabet$.pipe(debounceTime(4000));
  distinct$ = of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(distinct(), OperatorsService.showAllEmittedValues());
  distinctUntilChange$ = of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(distinctUntilChanged(), OperatorsService.showAllEmittedValues());
  elementAt$ = this.alphabet$.pipe(elementAt(3));
  filter$ = of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(filter(number => number % 2 === 0), OperatorsService.showAllEmittedValues());
  first$ = this.alphabet$.pipe(first());
  last$ = this.alphabet$.pipe(last());
  take$ = this.alphabet$.pipe(take(5), OperatorsService.showAllEmittedValues());
  takeLast$ = this.alphabet$.pipe(takeLast(2), OperatorsService.showAllEmittedValues());
  skip$ = this.alphabet$.pipe(skip(5), OperatorsService.showAllEmittedValues());
  skipLast$ = this.alphabet$.pipe(skipLast(2), OperatorsService.showAllEmittedValues());
  skipUnitil$ = this.alphabet$.pipe(skipUntil(interval(4000)), OperatorsService.showAllEmittedValues());

  // sampleTime$ = this.alphabet$.pipe(sampleTime(2000));

  constructor(private operatorService: OperatorsService) {
  }

  ngOnInit() {
  }


}
