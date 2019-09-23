import { Component, OnInit } from '@angular/core';
import {from, Subject} from 'rxjs';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import {multicast} from 'rxjs/operators';

@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.component.html',
  styleUrls: ['./sharing.component.css']
})
export class SharingComponent implements OnInit {

  constructor() { }

  ngOnInit() {


};
