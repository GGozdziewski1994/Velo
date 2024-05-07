import { DatePipe, NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
  effect,
  inject,
  input,
  model,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';

import { MenuPanelComponent } from '@components/menu-panel';
import { StartRatingComponent } from '@components/start-rating';
import { TimeElapsedPipe } from '@shared/pipes';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [
    NgClass,
    MenuPanelComponent,
    MatIcon,
    MatIconButton,
    StartRatingComponent,
    NgOptimizedImage,
    NgStyle,
    TimeElapsedPipe,
    MatTooltip,
    DatePipe,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
  ],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForumComponent implements OnInit {
  #injector = inject(Injector);

  protected selectType = signal<'all' | 'following' | string>('all');

  protected iconsTypes = [
    { label: 'Wszystkie wpisy', type: 'all', icon: 'forum' },
    { label: 'Obserwowane', type: 'following', icon: 'star' },
  ];

  protected dotTypes = [
    { label: 'Najlepsze trasy', type: 'routes', dotBackground: '#3339FF' },
    { label: 'Wymiana hamulców', type: 'breaks', dotBackground: '#80FF33' },
    { label: 'Dieta', type: 'diet', dotBackground: '#110A03' },
    { label: 'Odzież', type: 'clothing', dotBackground: '#147E1C' },
  ];

  protected forumEntry = [
    {
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

  ngOnInit(): void {
    runInInjectionContext(this.#injector, () => {
      effect(() => {
        console.log(this.selectType());
      });
    });
  }

  addRating(rate: number): void {
    console.log(rate);
  }
}
