import {Component} from '@angular/core';
import {every, find, findIndex, isEmpty} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent {

  everyGreaterThanFive$ = of(1, 2, 3, 4, 5, 6).pipe(every(value => value > 5));
  everyGreaterOrEqualOne$ = of(1, 2, 3, 4, 5, 6).pipe(every(value => value >= 1));
  findGreaterThanFour$ = of(1, 2, 3, 4, 5, 6).pipe(find(value => value >= 4));
  findEvenNumber$ = of(1, 2, 3, 4, 5, 6).pipe(findIndex(value => value % 2 === 0));
  isEmpty$ = of().pipe(isEmpty());
}
