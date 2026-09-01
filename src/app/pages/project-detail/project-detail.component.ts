import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { projects, ProjectItem } from '../../data/portfolio.data';
import { SeoService } from '../../core/services/seo.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [CommonModule, RouterLink, ScrollRevealDirective],
    templateUrl: './project-detail.component.html',
    styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private seoService = inject(SeoService);

    project: ProjectItem | null = null;
    prevProject: ProjectItem | null = null;
    nextProject: ProjectItem | null = null;
    allProjects: ProjectItem[] = projects;

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const slug = params.get('slug');
            const index = this.allProjects.findIndex((p) => p.slug === slug);

            if (index === -1) {
                this.router.navigate(['/404']);
                return;
            }

            this.project = this.allProjects[index];
            this.prevProject = index > 0 ? this.allProjects[index - 1] : this.allProjects[this.allProjects.length - 1];
            this.nextProject = index < this.allProjects.length - 1 ? this.allProjects[index + 1] : this.allProjects[0];

            this.seoService.updateProjectSeo(this.project);
        });
    }
}

