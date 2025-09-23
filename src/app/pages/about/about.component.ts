import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { About, PersonalInfo } from '../../models/portfolio.model';
import { aboutInfo, personalInfo } from '../../models/portfolio.data';

@Component({
    selector: 'app-about',
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
    aboutData: About = aboutInfo;
    personalData: PersonalInfo = personalInfo;

    // Helper method để chia biography thành paragraphs
    getBiographyParagraphs(): string[] {
        return this.aboutData.biography.split('\n\n').filter((p) => p.trim().length > 0);
    }

    // Helper method để chia experience thành paragraphs
    getExperienceParagraphs(): string[] {
        return this.aboutData.experience.split('\n\n').filter((p) => p.trim().length > 0);
    }

    // Helper method để chia career goals thành paragraphs
    getCareerGoalsParagraphs(): string[] {
        return this.aboutData.careerGoals.split('\n\n').filter((p) => p.trim().length > 0);
    }

    // Helper method để chia education thành paragraphs
    getEducationParagraphs(): string[] {
        return this.aboutData.education.split('\n\n').filter((p) => p.trim().length > 0);
    }

    // TrackBy functions để tối ưu performance
    trackByValue(index: number, value: string): string {
        return value;
    }

    trackByHobby(index: number, hobby: string): string {
        return hobby;
    }

    trackByTimelineYear(index: number, item: { year: string; title: string; description: string }): string {
        return item.year;
    }
}
