import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeRouteItemComponent } from './bike-route-item.component';

describe('BikeRouteItemComponent', () => {
  let component: BikeRouteItemComponent;
  let fixture: ComponentFixture<BikeRouteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeRouteItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BikeRouteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
