import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReventryComponent } from './reventry.component';

describe('ReventryComponent', () => {
  let component: ReventryComponent;
  let fixture: ComponentFixture<ReventryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReventryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReventryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
