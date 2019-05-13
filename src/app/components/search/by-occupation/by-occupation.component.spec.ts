import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByOccupationComponent } from './by-occupation.component';

describe('ByOccupationComponent', () => {
  let component: ByOccupationComponent;
  let fixture: ComponentFixture<ByOccupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByOccupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
