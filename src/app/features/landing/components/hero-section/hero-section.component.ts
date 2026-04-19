import { Component } from '@angular/core';

import { SITE } from '../../../../core/constants/site.constants';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  readonly site = SITE;
}
