import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryblogComponent } from './masonryblog.component';

describe('MasonryblogComponent', () => {
  let component: MasonryblogComponent;
  let fixture: ComponentFixture<MasonryblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonryblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
