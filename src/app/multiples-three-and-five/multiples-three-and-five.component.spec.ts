import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplesThreeAndFiveComponent } from './multiples-three-and-five.component';

describe('MultiplesThreeAndFiveComponent', () => {
  let component: MultiplesThreeAndFiveComponent;
  let fixture: ComponentFixture<MultiplesThreeAndFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplesThreeAndFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplesThreeAndFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
