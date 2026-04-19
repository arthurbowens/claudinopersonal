import { Component } from '@angular/core';

import { SITE } from '../../../../core/constants/site.constants';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.component.html',
})
export class SiteFooterComponent {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
}
