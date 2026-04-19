import { Component } from '@angular/core';

import { SITE } from '../../../../core/constants/site.constants';

@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: './about-section.component.html',
})
export class AboutSectionComponent {
  readonly site = SITE;
}
