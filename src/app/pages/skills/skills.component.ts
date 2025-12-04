import { skillData } from './../../models/portfolio.data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from '../../models/portfolio.model';

@Component({
    selector: 'app-skills',
    imports: [CommonModule],
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
    skillData: Skill = skillData;

    getSortedTechnologies(technologies: any[]): any[] {
        return technologies.slice().sort((a, b) => b.level - a.level);
    }

    getLevelClass(level: number): string {
        if (level <= 30) return 'bg-danger';
        if (level <= 70) return 'bg-warning';
        return 'bg-success';
    }
}
