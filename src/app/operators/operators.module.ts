import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MathematicalAndAggregateComponent} from './mathematical-and-aggregate/mathematical-and-aggregate.component';
import {OperatorsComponent} from './operators.component';
import {OperatorsMenuComponent} from './operators-menu/operators-menu.component';
import {CreationComponent} from './creation/creation.component';
import {JoinCreationComponent} from './join-creation/join-creation.component';
import {TransformationComponent} from './transformation/transformation.component';
import {FilteringComponent} from './filtering/filtering.component';
import {JoinComponent} from './join/join.component';
import {MulticastingComponent} from './multicasting/multicasting.component';
import {ErrorHandlingComponent} from './error-handling/error-handling.component';
import {UtilityComponent} from './utility/utility.component';
import {ConditionalComponent} from './conditional/conditional.component';

const operatorsRoutes: Routes = [
  {
    path: '', component: OperatorsComponent, children: [
      {path: 'creation', component: CreationComponent},
      {path: 'join-creation', component: JoinCreationComponent},
      {path: 'transformation', component: TransformationComponent},
      {path: 'filtering', component: FilteringComponent},
      {path: 'join', component: JoinComponent},
      {path: 'multicasting', component: MulticastingComponent},
      {path: 'error-handling', component: ErrorHandlingComponent},
      {path: 'utility', component: UtilityComponent},
      {path: 'conditional', component: ConditionalComponent},
      {path: 'math', component: MathematicalAndAggregateComponent}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(operatorsRoutes)
  ],
  declarations: [
    OperatorsComponent,
    OperatorsMenuComponent,
    CreationComponent,
    JoinCreationComponent,
    TransformationComponent,
    FilteringComponent,
    JoinComponent,
    MulticastingComponent,
    ErrorHandlingComponent,
    UtilityComponent,
    ConditionalComponent,
    MathematicalAndAggregateComponent]
})
export class OperatorsModule {
}
