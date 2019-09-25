import {Component, OnInit} from '@angular/core';
import {from, generate, of, range, Subject} from 'rxjs';
import {count, max, min, reduce, scan} from 'rxjs/operators';
import {OperatorsService} from '../operators.service';

@Component({
  selector: 'app-mathematical-and-aggregate',
  templateUrl: './mathematical-and-aggregate.component.html',
  styleUrls: ['./mathematical-and-aggregate.component.css']
})
export class MathematicalAndAggregateComponent implements OnInit {

  subject$ = new Subject<number>();
  scanListEmittedValues$ = this.subject$
    .pipe(scan((acc, value) => [...acc, value], []));
  count$ = this.subject$.pipe(count());
  max$ = this.subject$.pipe(max());
  min$ = this.subject$.pipe(min());
  reduceSum$ = this.subject$
    .pipe(reduce((acc, value) => acc + value, 0));
  reduceList$ = this.subject$
    .pipe(reduce((acc, value) => [...acc, value], []));



  constructor(private operatorsService: OperatorsService) {
  }

  ngOnInit() {
    this.operatorsService.getRandomNumbers().subscribe(this.subject$);
  }

  private showAllEmittedValues() {
    return scan((acc, value) => [...acc, value], []);
  }

}
