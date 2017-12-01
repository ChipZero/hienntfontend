import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProtypeComponent } from './detail-protype.component';

describe('DetailProtypeComponent', () => {
  let component: DetailProtypeComponent;
  let fixture: ComponentFixture<DetailProtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
