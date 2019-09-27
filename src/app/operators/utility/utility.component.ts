import {Component} from '@angular/core';
import {delay, map, tap, timeout, timestamp, toArray} from 'rxjs/operators';
import {OperatorsService} from '../operators.service';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent {
  evenNumbers$ = this.operatorsService.getEvenNumbers();
  evenNumbersAll$ = this.operatorsService.getEvenNumbers().pipe(OperatorsService.showAllEmittedValues());
  tap$ = this.operatorsService.getEvenNumbers().pipe(tap(even => console.log('tap:', even * 3)), OperatorsService.showAllEmittedValues());
  delay$ = this.operatorsService.getEvenNumbers().pipe(delay(2000), OperatorsService.showAllEmittedValues());
  timeStamp$ = this.operatorsService.getEvenNumbers().pipe(timestamp(), map(date => date.timestamp), OperatorsService.showAllEmittedValues());
  timeOut$ = this.operatorsService.getEvenNumbers().pipe(timeout(1000));
  toArray$ = this.operatorsService.getEvenNumbers().pipe(toArray());

  constructor(private operatorsService: OperatorsService) {
  }
}
