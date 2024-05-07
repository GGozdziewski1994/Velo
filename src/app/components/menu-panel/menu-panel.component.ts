import { NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, model, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { MenuPanel } from '@models/menu-panel.interface';

@Component({
  selector: 'app-menu-panel',
  standalone: true,
  imports: [NgClass, MatIconModule, NgStyle],
  templateUrl: './menu-panel.component.html',
  styleUrl: './menu-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuPanelComponent {
  basicItems = input<MenuPanel[]>();
  iconItems = input<MenuPanel[]>();
  dotItems = input<MenuPanel[]>();

  selectedItem = model<string>();
}
