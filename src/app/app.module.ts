import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CarComponent} from './car/car.component';
import {SubjectComponent} from './subject/subject.component';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {OperatorsModule} from './operators/operators.module';

const appRoutes: Routes = [


  {path: 'operators', loadChildren : () => import("./operators/operators.module")
      .then(m=>m.OperatorsModule)},
  {path: 'subjects', component: SubjectComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    SubjectComponent,
    MenuComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    OperatorsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
