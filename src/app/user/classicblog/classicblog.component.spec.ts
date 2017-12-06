import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicblogComponent } from './classicblog.component';

describe('ClassicblogComponent', () => {
  let component: ClassicblogComponent;
  let fixture: ComponentFixture<ClassicblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
