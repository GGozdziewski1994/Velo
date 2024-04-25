import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForumComponent {}
