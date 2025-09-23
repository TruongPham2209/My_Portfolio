import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Project } from '../../models/portfolio.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-project-detail',
    imports: [CommonModule],
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss'],
    animations: [
        trigger('fadeInTech', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(10px)' }),
                animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
        ]),
    ],
})
export class ProjectDetailComponent {
    @Input() project: Project | null = null;
    @Output() closed = new EventEmitter<void>();

    @ViewChild('projectDetailModal') modalTemplate!: ElementRef;

    private modalRef: NgbModalRef | null = null;

    constructor(private modalService: NgbModal) {}

    openModal(project: Project): void {
        this.project = project;
        this.modalRef = this.modalService.open(this.modalTemplate, {
            size: 'xl',
            centered: true,
            backdrop: 'static',
            keyboard: true,
            scrollable: true,
        });

        this.modalRef.result.then(
            () => {
                this.onModalClosed();
            },
            () => {
                this.onModalClosed();
            },
        );
    }

    closeModal(): void {
        if (this.modalRef) {
            this.modalRef.close();
        }
    }

    private onModalClosed(): void {
        this.project = null;
        this.modalRef = null;
        this.closed.emit();
    }

    trackByTechName(index: number, tech: { name: string; svg: string; description: string }): string {
        return tech.name;
    }
}
