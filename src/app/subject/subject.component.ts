import {Component} from '@angular/core';
import {AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {scan} from 'rxjs/operators';

let allNumbers = scan((acc, value) => [...acc, value], []);

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  subject$ = new Subject<number>();
  behaviorSubject$ = new BehaviorSubject<number>(10);
  asyncSubject$ = new AsyncSubject<number>();
  replaySubject$ = new ReplaySubject<number>();

  subjectAllNumbers$ = this.subject$.pipe(allNumbers);
  behaviorSubjectAllNumbers$ = this.behaviorSubject$.pipe(allNumbers);
  asyncSubjectAllNumbers$ = this.asyncSubject$.pipe(allNumbers);
  replaySubjectAllNumbers$ = this.replaySubject$.pipe(allNumbers);

  subjectNewSubscriber$ = new Observable<number[]>();
  behaviorSubjectNewSubscriber$ = new Observable<number[]>();
  asyncSubjectNewSubscriber$ = new Observable<number[]>();
  replaySubjectNewSubscriber$ = new Observable<number[]>();

  clicked() {
    const randomNumber = this.getRandomNumber();
    this.behaviorSubject$.next(randomNumber);
    this.subject$.next(randomNumber);
    this.asyncSubject$.next(randomNumber);
    this.replaySubject$.next(randomNumber);
  }

  close() {
    this.behaviorSubject$.complete();
    this.subject$.complete();
    this.asyncSubject$.complete();
    this.replaySubject$.complete();
  }

  newSubscriber() {
    this.subjectNewSubscriber$ = this.subject$.pipe(allNumbers);
    this.behaviorSubjectNewSubscriber$ = this.behaviorSubject$.pipe(allNumbers);
    this.asyncSubjectNewSubscriber$ = this.asyncSubject$.pipe(allNumbers);
    this.replaySubjectNewSubscriber$ = this.replaySubject$.pipe(allNumbers);
  }

  private getRandomNumber() {
    return Math.floor(Math.random() * 100).valueOf() + 1;
  }
}
