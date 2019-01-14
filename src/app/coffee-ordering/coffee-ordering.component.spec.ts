import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeOrderingComponent } from './coffee-ordering.component';

describe('CoffeeOrderingComponent', () => {
  let component: CoffeeOrderingComponent;
  let fixture: ComponentFixture<CoffeeOrderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeOrderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
