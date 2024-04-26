import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bikeRoutes',
  standalone: true,
  imports: [],
  templateUrl: './bikeRoutes.component.html',
  styleUrl: './bikeRoutes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeRoutesComponent {}
