import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtypeComponent } from './protype.component';

describe('ProtypeComponent', () => {
  let component: ProtypeComponent;
  let fixture: ComponentFixture<ProtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
