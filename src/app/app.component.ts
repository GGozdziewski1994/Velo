import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { iconsSvg } from '@shared/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private sanitizer: DomSanitizer,
    private iconReg: MatIconRegistry
  ) {
    iconsSvg.forEach(icon => iconReg.addSvgIcon(icon.name, sanitizer.bypassSecurityTrustResourceUrl(icon.path)));
  }
}
