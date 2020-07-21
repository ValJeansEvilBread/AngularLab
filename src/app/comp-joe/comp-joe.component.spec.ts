import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompJoeComponent } from './comp-joe.component';

describe('CompJoeComponent', () => {
  let component: CompJoeComponent;
  let fixture: ComponentFixture<CompJoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompJoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompJoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
