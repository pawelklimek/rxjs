import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {combineLatest, concat, forkJoin, merge, race, zip} from 'rxjs';
import {OperatorsService} from '../operators.service';

@Component({
  selector: 'app-join-creation',
  templateUrl: './join-creation.component.html',
  styleUrls: ['./join-creation.component.css']
})
export class JoinCreationComponent {

  oddNumber$ = this.operatorsService.getOddNumbers();
  evenNumber$ = this.operatorsService.getEvenNumbers();
  oddNumberAll$ = this.oddNumber$.pipe(OperatorsService.showAllEmittedValues());
  evenNumberAll$ = this.evenNumber$.pipe(OperatorsService.showAllEmittedValues());

  combineLatestMultiplication$ = combineLatest(this.oddNumber$, this.evenNumber$).pipe(this.multiplication());
  combineLatestMultiplicationAll$ = this.combineLatestMultiplication$.pipe(OperatorsService.showAllEmittedValues());

  concat$ = concat(this.oddNumber$, this.evenNumber$);
  concatAll$ = this.concat$.pipe(OperatorsService.showAllEmittedValues());

  merge$ = merge(this.oddNumber$, this.evenNumber$);
  mergeAll$ = this.merge$.pipe(OperatorsService.showAllEmittedValues());

  forkJoin$ = forkJoin(this.oddNumber$, this.evenNumber$);
  forkJoinAll$ = this.forkJoin$.pipe(OperatorsService.showAllEmittedValues());

  race$ = race(this.oddNumber$, this.evenNumber$);
  raceAll$ = this.race$.pipe(OperatorsService.showAllEmittedValues());

  zip$ = zip(this.oddNumber$, this.evenNumber$);
  zipAll$ = this.zip$.pipe(OperatorsService.showAllEmittedValues());

  constructor(private operatorsService: OperatorsService) {
  }

  private multiplication() {
    return map(([odd, even]) => odd * even);
  }
}
