import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route1ChildComponent } from './route1-child.component';

describe('Route1ChildComponent', () => {
  let component: Route1ChildComponent;
  let fixture: ComponentFixture<Route1ChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Route1ChildComponent]
    });
    fixture = TestBed.createComponent(Route1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
