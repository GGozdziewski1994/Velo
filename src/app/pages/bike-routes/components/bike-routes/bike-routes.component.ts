import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bike-routes',
  standalone: true,
  imports: [],
  templateUrl: './bike-routes.component.html',
  styleUrl: './bike-routes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeRoutesComponent {}
