import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { SubjectComponent } from './subject/subject.component';
import { SharingComponent } from './sharing/sharing.component';
import { OperatorsComponent } from './operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    SubjectComponent,
    SharingComponent,
    OperatorsComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
