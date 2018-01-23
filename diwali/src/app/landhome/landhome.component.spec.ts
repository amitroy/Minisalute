import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandhomeComponent } from './landhome.component';

describe('LandhomeComponent', () => {
  let component: LandhomeComponent;
  let fixture: ComponentFixture<LandhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
