import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBobComponent } from './comp-bob.component';

describe('CompBobComponent', () => {
  let component: CompBobComponent;
  let fixture: ComponentFixture<CompBobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompBobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompBobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
