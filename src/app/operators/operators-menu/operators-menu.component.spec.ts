import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsMenuComponent } from './operators-menu.component';

describe('OperatorsMenuComponent', () => {
  let component: OperatorsMenuComponent;
  let fixture: ComponentFixture<OperatorsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
