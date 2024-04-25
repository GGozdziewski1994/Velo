import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { footerItemLinks, menuNavItems } from '@shared/configs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, MatIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected navItems = menuNavItems;
  protected footerIemLinks = footerItemLinks;
}
