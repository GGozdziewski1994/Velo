import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bike-routes-shell',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="mx-auto max-w-container py-10 text-primary-darker">
      <router-outlet />
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeRoutesShellComponent {}
