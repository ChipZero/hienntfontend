import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernblogComponent } from './modernblog.component';

describe('ModernblogComponent', () => {
  let component: ModernblogComponent;
  let fixture: ComponentFixture<ModernblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
