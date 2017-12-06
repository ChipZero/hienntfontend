import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridblogComponent } from './gridblog.component';

describe('GridblogComponent', () => {
  let component: GridblogComponent;
  let fixture: ComponentFixture<GridblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
