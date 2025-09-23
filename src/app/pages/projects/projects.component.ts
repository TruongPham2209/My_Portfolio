import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../models/portfolio.model';
import { highlightedProjects, projects } from '../../models/portfolio.data';
import { ProjectDetailComponent } from '../../components/project-detail/project-detail.component';

@Component({
    selector: 'app-projects',
    imports: [CommonModule, ProjectDetailComponent],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    @ViewChild(ProjectDetailComponent) projectDetailComponent!: ProjectDetailComponent;

    projects: Project[] = projects;
    highlightedProjects: Project[] = highlightedProjects;
    filteredProjects: Project[] = [];
    selectedTechnology = 'all';
    availableTechnologies: string[] = [];

    ngOnInit(): void {
        this.loadProjects();
    }

    loadProjects(): void {
        this.filteredProjects = this.projects;
        this.extractTechnologies();
    }

    extractTechnologies(): void {
        const techSet = new Set<string>();
        techSet.add('PostgreSQL');
        techSet.add('Redis');
        techSet.add('Angular');
        techSet.add('gRPC');
        techSet.add('Kafka');
        techSet.add('Eureka');
        techSet.add('Prometheus');
        techSet.add('MongoDB');
        techSet.add('Oauth2 Flow');
        techSet.add('Stripe');
        techSet.add('Cloudinary');

        this.availableTechnologies = Array.from(techSet).sort();
    }

    filterByTechnology(technology: string): void {
        this.selectedTechnology = technology;
        if (technology === 'all') {
            this.filteredProjects = this.projects;
        } else {
            this.filteredProjects = this.projects.filter((project) =>
                project.technologies.some((tech) => tech.name.includes(technology)),
            );
        }
    }

    showProjectDetail(project: Project): void {
        this.projectDetailComponent.openModal(project);
    }

    onProjectDetailClosed(): void {
        // Handle modal close event if needed
        console.log('Project detail modal closed');
    }

    openExternalLink(url: string): void {
        window.open(url, '_blank');
    }
}
