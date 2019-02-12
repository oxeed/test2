import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomecatComponent } from './incomecat.component';

describe('IncomecatComponent', () => {
  let component: IncomecatComponent;
  let fixture: ComponentFixture<IncomecatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomecatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomecatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
