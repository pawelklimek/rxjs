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
  tap$ = this.evenNumbers$.pipe(tap(even => console.log('tap:', even * 3)), OperatorsService.showAllEmittedValues());
  delay$ = this.evenNumbers$.pipe(delay(2000), OperatorsService.showAllEmittedValues());
  timeStamp$ = this.evenNumbers$.pipe(timestamp(), map(date => date.timestamp), OperatorsService.showAllEmittedValues());
  timeOut$ = this.evenNumbers$.pipe(timeout(1000));
  toArray$ = this.evenNumbers$.pipe(toArray());

  constructor(private operatorsService: OperatorsService) {
  }
}
