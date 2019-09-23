import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CreateOperatorComponent } from './operators/create-operator/create-operator.component';
import { SubjectComponent } from './subject/subject.component';
import { SharingComponent } from './sharing/sharing.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CreateOperatorComponent,
    SubjectComponent,
    SharingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
