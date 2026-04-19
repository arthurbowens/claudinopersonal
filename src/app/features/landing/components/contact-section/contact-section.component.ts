import { Component } from '@angular/core';

import { SITE } from '../../../../core/constants/site.constants';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  readonly site = SITE;
}
