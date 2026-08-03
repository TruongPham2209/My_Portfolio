import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { personalInfo, aboutSummary, aboutHighlights, education } from '../../data/portfolio.data';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective, SectionHeadingComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {
    info = personalInfo;
    summary = aboutSummary;
    highlights = aboutHighlights;
    education = education;
}
