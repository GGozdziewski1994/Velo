import { DatePipe, NgOptimizedImage, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';

import { StartRatingComponent } from '@components/start-rating';
import { TimeElapsedPipe } from '@shared/pipes';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [
    DatePipe,
    MatIcon,
    MatIconButton,
    MatMenu,
    NgStyle,
    NgOptimizedImage,
    TimeElapsedPipe,
    MatTooltip,
    StartRatingComponent,
    MatMenuTrigger,
    MatMenuItem,
  ],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForumComponent {
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  protected rating = signal<number | null>(null);

  protected forumEntry = [
    {
      id: '123',
      entryId: 'entry-123',
      userLogo:
        'https://media.istockphoto.com/id/1450333869/pl/zdj%C4%99cie/fitness-sportowiec-i-rowerzysta-z-rowerem-na-g%C3%B3rskiej-drodze-dla-zdrowia-dobrego.jpg?s=2048x2048&w=is&k=20&c=WEu53mI0cOKScsqI30F5y4fL4WuL7XnN8th_-qDsdFA=',
      title: 'Trasa Poznań (Bułgarska) - Wielkopolski Park Narodowy (Puszczykowo)',
      typeEntry: 'Najlepsze trasy',
      bgType: '#3339FF',
      createAt: '2024-05-06T21:10:30.625Z',
      createBy: 'Grzegorz',
      rating: 4.21,
      ratedBy: 879,
      numberOfComments: 7,
      isFallowing: false,
    },
    {
      id: '456',
      entryId: 'entry-456',
      userLogo:
        'https://media.istockphoto.com/id/1450333869/pl/zdj%C4%99cie/fitness-sportowiec-i-rowerzysta-z-rowerem-na-g%C3%B3rskiej-drodze-dla-zdrowia-dobrego.jpg?s=2048x2048&w=is&k=20&c=WEu53mI0cOKScsqI30F5y4fL4WuL7XnN8th_-qDsdFA=',
      title: 'Trasa Witankowo - Różewo - Strączno - Wałcz - Witankowo',
      typeEntry: 'Najlepsze trasy',
      bgType: '#3339FF',
      createAt: '2024-04-22T20:53:30.625Z',
      createBy: 'Grzegorz',
      rating: 4.72,
      ratedBy: 542,
      numberOfComments: 3,
      isFallowing: true,
    },
  ];

  constructor() {
    effect(() => {
      console.log(this.rating());
    });
  }

  goToEntry(id: string): void {
    this.#router.navigate([id], { relativeTo: this.#route });
  }
}
