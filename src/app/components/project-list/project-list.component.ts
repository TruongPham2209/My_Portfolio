import { Component, Input, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/portfolio.model';

@Component({
    selector: 'app-projects-list',
    imports: [CommonModule, RouterModule, NgbCarouselModule, ProjectDetailComponent],
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
    animations: [
        // Animation fade-in mượt mà cho các phần
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(20px)' }),
                animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
        ]),
        // Slide cho dự án (nếu dùng carousel)
        trigger('slideIn', [
            transition(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('800ms ease-in-out', style({ transform: 'translateX(0)' })),
            ]),
        ]),
    ],
})
export class ProjectListComponent {
    @Input() projects: Project[] = [];
    @ViewChild(ProjectDetailComponent) projectDetailComponent!: ProjectDetailComponent;

    trackByProjectTitle(index: number, project: Project): string {
        return project.title;
    }

    // Method để mở modal chi tiết project
    openProjectDetail(project: Project): void {
        console.log('Opening project detail for:', project.title);
        this.projectDetailComponent.openModal(project);
    }

    onProjectDetailClosed(): void {
        console.log('Project detail modal closed');
    }
}
