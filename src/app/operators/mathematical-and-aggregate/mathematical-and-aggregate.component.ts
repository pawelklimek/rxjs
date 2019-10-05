import {Component} from '@angular/core';
import {count, max, min, reduce} from 'rxjs/operators';
import {OperatorsService} from '../operators.service';

@Component({
  selector: 'app-mathematical-and-aggregate',
  templateUrl: './mathematical-and-aggregate.component.html',
  styleUrls: ['./mathematical-and-aggregate.component.css']
})
export class MathematicalAndAggregateComponent{

  oddNumbers$ = this.operatorsService.getOddNumbers();
  oddNumbersAll$ = this.oddNumbers$.pipe(OperatorsService.showAllEmittedValues());
  count$ = this.oddNumbers$.pipe(count());
  max$ = this.oddNumbers$.pipe(max());
  min$ = this.oddNumbers$.pipe(min());
  reduceSum$ = this.oddNumbers$.pipe(reduce((acc, value) => acc + value, 0));
  reduceList$ = this.oddNumbers$.pipe(reduce((acc, value) => [...acc, value], []));

  constructor(private operatorsService: OperatorsService) {
  }

}
