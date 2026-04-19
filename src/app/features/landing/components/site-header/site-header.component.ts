import { Component } from '@angular/core';

import { NAV_LINKS, SITE } from '../../../../core/constants/site.constants';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  readonly site = SITE;
  readonly navLinks = NAV_LINKS;
}
