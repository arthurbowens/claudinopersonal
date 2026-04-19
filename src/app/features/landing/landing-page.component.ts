import { Component } from '@angular/core';

import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { DifferentialSectionComponent } from './components/differential-section/differential-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProblemSectionComponent } from './components/problem-section/problem-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    ProblemSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    DifferentialSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
    SiteFooterComponent,
  ],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {}
