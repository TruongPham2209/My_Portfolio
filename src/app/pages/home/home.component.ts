import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectListComponent } from '../../components/project-list/project-list.component';
import { homeData } from '../../models/portfolio.data';
import { HomeData } from '../../models/portfolio.model';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule, NgbCarouselModule, ProjectListComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
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
export class HomeComponent {
    data: HomeData = homeData;

    // TrackBy functions để tối ưu performance
    trackByTechName(index: number, tech: { name: string; icon: string }): string {
        return tech.name;
    }
}
