import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, input, output } from '@angular/core';
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
  rating = input.required<number>();
  rate = output<number>();

  readonly #maxStars = 5;
  protected stars: string[] = [];

  ngOnInit(): void {
    this.stars = this.initStars;
  }

  get initStars(): string[] {
    const rest = this.rating() % 1;
    const fullStars = rest >= 0.75 ? Math.ceil(this.rating()) : Math.floor(this.rating());
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
