import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route2Child2Component } from './route2-child2.component';

describe('Route2Child2Component', () => {
  let component: Route2Child2Component;
  let fixture: ComponentFixture<Route2Child2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Route2Child2Component]
    });
    fixture = TestBed.createComponent(Route2Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
