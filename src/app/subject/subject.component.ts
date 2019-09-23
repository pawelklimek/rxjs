import {Component} from '@angular/core';
import {AsyncSubject, BehaviorSubject, ReplaySubject, Subject} from 'rxjs';
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
    this.subject$.subscribe(number => console.log('Subject number:' + number));
    this.behaviorSubject$.subscribe(number => console.log('BehaviorSubject number:' + number));
    this.asyncSubject$.subscribe(number => console.log('AsyncSubject number' + number));
    this.replaySubject$.subscribe(number => console.log('ReplaySubject number' + number));
  }

  private getRandomNumber() {
    return Math.floor(Math.random() * 100).valueOf() + 1;
  }
}
