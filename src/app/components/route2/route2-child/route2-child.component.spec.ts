import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route2ChildComponent } from './route2-child.component';

describe('Route2ChildComponent', () => {
  let component: Route2ChildComponent;
  let fixture: ComponentFixture<Route2ChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Route2ChildComponent]
    });
    fixture = TestBed.createComponent(Route2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
