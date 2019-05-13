import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TefilosComponent } from './tefilos.component';

describe('TefilosComponent', () => {
  let component: TefilosComponent;
  let fixture: ComponentFixture<TefilosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TefilosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TefilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
