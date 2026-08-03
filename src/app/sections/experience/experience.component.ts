import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { experiences, ExperienceItem } from '../../data/portfolio.data';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective, SectionHeadingComponent],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
    experiences: ExperienceItem[] = experiences;

    trackByCompany(index: number, item: ExperienceItem): string {
        return item.company;
    }
}
