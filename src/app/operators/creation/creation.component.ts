import {Component} from '@angular/core';
import {from, generate, of, range} from 'rxjs';
import {OperatorsService} from '../operators.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent {

  of$ = of(1, 2, 3).pipe(OperatorsService.showAllEmittedValues());

  range$ = range(0, 5).pipe(OperatorsService.showAllEmittedValues());
  generate$ = generate({
    initialState: 0,
    condition: x => x < 10,
    iterate: x => x + 1
  }).pipe(OperatorsService.showAllEmittedValues());

  from$ = from([1, 2, 3]).pipe(OperatorsService.showAllEmittedValues());
}
