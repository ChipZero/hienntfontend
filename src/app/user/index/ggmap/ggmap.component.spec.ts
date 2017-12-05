import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GgmapComponent } from './ggmap.component';

describe('GgmapComponent', () => {
  let component: GgmapComponent;
  let fixture: ComponentFixture<GgmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GgmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GgmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
