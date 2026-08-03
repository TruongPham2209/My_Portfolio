import { Component, Input } from '@angular/core';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
    selector: 'app-section-heading',
    standalone: true,
    imports: [ScrollRevealDirective],
    template: `
        <div class="section-header" appScrollReveal>
            <span class="section-label">{{ label }}</span>
            <h2 class="section-title">{{ title }}</h2>
            @if (subtitle) {
                <p class="section-subtitle">{{ subtitle }}</p>
            }
        </div>
    `,
})
export class SectionHeadingComponent {
    @Input() label = '';
    @Input() title = '';
    @Input() subtitle = '';
}
