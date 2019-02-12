import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostentryComponent } from './costentry.component';

describe('CostentryComponent', () => {
  let component: CostentryComponent;
  let fixture: ComponentFixture<CostentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
