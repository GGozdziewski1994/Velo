import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, input, model, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-start-rating',
  standalone: true,
  imports: [MatIcon, NgClass, NgTemplateOutlet],
  templateUrl: './start-rating.component.html',
  styleUrl: './start-rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartRatingComponent implements OnInit {
  ratingIsReadonly = input<boolean>(true);
  averageRating = input.required<number>();
  userRating = model<number | null>();

  readonly #maxStars = 5;
  protected stars: string[] = [];

  ngOnInit(): void {
    this.stars = this.initStars;
  }

  get initStars(): string[] {
    const rating = this.userRating() ?? this.averageRating();
    const rest = rating % 1;
    const fullStars = rest >= 0.75 ? Math.ceil(rating) : Math.floor(rating);
    const halfStar = rest >= 0.25 && rest < 0.75;
    const emptyStars = this.#maxStars - fullStars - (halfStar ? 1 : 0);

    return Array(fullStars)
      .fill('star_rate')
      .concat(halfStar ? ['star_half'] : [])
      .concat(Array(emptyStars).fill('star'));
  }

  highlightStars(index: number) {
    this.stars = this.stars.map((_, i) => (i <= index ? 'star_rate' : 'star'));
  }

  resetStars() {
    this.stars = this.initStars;
  }
}
