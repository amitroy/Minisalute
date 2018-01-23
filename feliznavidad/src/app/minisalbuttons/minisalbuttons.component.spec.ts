import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisalbuttonsComponent } from './minisalbuttons.component';

describe('MinisalbuttonsComponent', () => {
  let component: MinisalbuttonsComponent;
  let fixture: ComponentFixture<MinisalbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinisalbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisalbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
