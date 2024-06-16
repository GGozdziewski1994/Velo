import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { provideComponentStore } from '@ngrx/component-store';

import { PostContainerComponent } from '@pages/blog/components/post-container/post-container.component';
import { DashboardComponentStore } from '@pages/dashboard/components/dashboard/dashboard.store';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButton, NgOptimizedImage, PostContainerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideComponentStore(DashboardComponentStore)],
})
export class DashboardComponent {
  #componentStore = inject(DashboardComponentStore);
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  dashboardData = this.#componentStore.dashboardDataSignal;
  posts = this.#componentStore.postsSignal;

  goToBlog(): void {
    this.#router.navigate(['../blog'], { relativeTo: this.#route });
  }

  goToBlogItem(id: string): void {
    this.#router.navigate(['../blog', id], { relativeTo: this.#route });
  }
}
