import {Component, OnInit} from '@angular/core';
import {OperatorsService} from './operators.service';
import {count, max, min, reduce, scan} from 'rxjs/operators';
import {from, generate, of, range, Subject} from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {


  subject$ = new Subject<number>();

  scanListEmittedValues$ = this.subject$.pipe(scan((acc, value) => [...acc, value], []));
  count$ = this.subject$.pipe(count());
  max$ = this.subject$.pipe(max());
  min$ = this.subject$.pipe(min());
  reduceSum$ = this.subject$.pipe(reduce((acc, value) => acc + value, 0));
  reduceList$ = this.subject$.pipe(reduce((acc, value) => [...acc, value], []));

  //CREATION
  of$ = of(1, 2, 3)
    .pipe(this.showAllEmittedValues());

  range$ = range(0, 5)
    .pipe(this.showAllEmittedValues());

  generate$ = generate({
    initialState: 0,
    condition: x => x < 10,
    iterate: x => x + 1
  }).pipe(this.showAllEmittedValues());

  from$ = from([1, 2, 3])
    .pipe(this.showAllEmittedValues());


  constructor(private operatorsService: OperatorsService) {
  }

  ngOnInit() {
    this.operatorsService.getRandomNumbers().subscribe(this.subject$);
    range(0, 5).pipe(scan((acc, value) => [...acc, value], []));
  }

  private showAllEmittedValues() {
    return scan((acc, value) => [...acc, value], []);
  }

}
