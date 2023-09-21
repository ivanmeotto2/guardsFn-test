import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route1Child2Component } from './route1-child2.component';

describe('Route1Child2Component', () => {
  let component: Route1Child2Component;
  let fixture: ComponentFixture<Route1Child2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Route1Child2Component]
    });
    fixture = TestBed.createComponent(Route1Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
