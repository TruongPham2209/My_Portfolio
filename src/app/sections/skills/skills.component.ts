import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { skillCategories, SkillCategory } from '../../data/portfolio.data';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective, SectionHeadingComponent],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
})
export class SkillsComponent {
    categories: SkillCategory[] = skillCategories;

    trackByName(index: number, item: SkillCategory): string {
        return item.name;
    }
}
