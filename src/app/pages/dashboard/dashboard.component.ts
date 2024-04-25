import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

import { PostItemComponent } from '@components/';

import { posts } from '../../shared/configs/posts-draft.config';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PostItemComponent, MatButton, NgOptimizedImage],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected posts = posts;

  goToBlog(): void {
    this.router.navigate(['../blog'], { relativeTo: this.route });
  }
}
