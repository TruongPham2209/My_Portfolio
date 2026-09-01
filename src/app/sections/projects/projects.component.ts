import { Component, HostListener, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { projects, ProjectItem } from '../../data/portfolio.data';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective, SectionHeadingComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnDestroy {
    private platformId = inject(PLATFORM_ID);
    private document = inject(DOCUMENT);

    projects: ProjectItem[] = projects;
    selectedProject: ProjectItem | null = null;
    isModalOpen = false;

    trackByTitle(index: number, item: ProjectItem): string {
        return item.title;
    }

    openModal(project: ProjectItem, event?: Event): void {
        if (event) {
            event.stopPropagation();
        }
        this.selectedProject = project;
        this.isModalOpen = true;
        if (isPlatformBrowser(this.platformId)) {
            this.document.body.style.overflow = 'hidden';
        }
    }

    closeModal(): void {
        this.isModalOpen = false;
        if (isPlatformBrowser(this.platformId)) {
            this.document.body.style.overflow = 'auto';
        }
        setTimeout(() => {
            if (!this.isModalOpen) {
                this.selectedProject = null;
            }
        }, 300);
    }

    onBackdropClick(event: MouseEvent): void {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.closeModal();
        }
    }

    @HostListener('document:keydown.escape')
    onEscKey(): void {
        if (this.isModalOpen) {
            this.closeModal();
        }
    }

    openExternalLink(url: string, event: Event): void {
        event.stopPropagation();
        if (isPlatformBrowser(this.platformId)) {
            window.open(url, '_blank');
        }
    }

    ngOnDestroy(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.document.body.style.overflow = 'auto';
        }
    }
}
