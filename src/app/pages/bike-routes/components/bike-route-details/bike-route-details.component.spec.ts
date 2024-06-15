import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeRouteDetailsComponent } from './bike-route-details.component';

describe('BikeRouteDetailsComponent', () => {
  let component: BikeRouteDetailsComponent;
  let fixture: ComponentFixture<BikeRouteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeRouteDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BikeRouteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
