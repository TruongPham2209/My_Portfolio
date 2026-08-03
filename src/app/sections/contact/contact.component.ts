import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { personalInfo } from '../../data/portfolio.data';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective, SectionHeadingComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent {
    info = personalInfo;
}
