import { Component, OnInit } from '@angular/core';
import {OperatorsService} from '../operators.service';
import {combineLatest, concat, interval} from 'rxjs';
import {buffer, concatMap, map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.css']
})
export class TransformationComponent implements OnInit {


  oddNumber$ = this.operatorsService.getOddNumbers();
  evenNumber$ = this.operatorsService.getEvenNumbers();
  oddNumberAll$ = this.oddNumber$.pipe(OperatorsService.showAllEmittedValues());
  evenNumberAll$ = this.evenNumber$.pipe(OperatorsService.showAllEmittedValues());

  concatMap$ = this.oddNumber$.pipe(mergeMap(odd => this.evenNumber$.pipe(map(even => even * odd))),OperatorsService.showAllEmittedValues() );
  concat$ = concat(this.oddNumber$, this.evenNumber$).pipe(OperatorsService.showAllEmittedValues());

  constructor(private operatorsService: OperatorsService) { }


  ngOnInit() {
  }

}
