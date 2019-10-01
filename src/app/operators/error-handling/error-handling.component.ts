import { Component, OnInit } from '@angular/core';
import {interval, of, throwError, timer} from 'rxjs';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  constructor() {}


  streamWithError = of(interval(1000), throwError("xxx"))


  ngOnInit() {
  }

}
