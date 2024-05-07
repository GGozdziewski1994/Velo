import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeRoutesComponent } from './bike-routes.component';

describe('BikeRoutesComponent', () => {
  let component: BikeRoutesComponent;
  let fixture: ComponentFixture<BikeRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeRoutesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BikeRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
