import { Component, OnInit, inject } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { AboutComponent } from '../../sections/about/about.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        HeroComponent,
        AboutComponent,
        SkillsComponent,
        ExperienceComponent,
        ProjectsComponent,
        ContactComponent,
    ],
    template: `
        <main id="main-content">
            <app-hero></app-hero>
            <app-about></app-about>
            <app-skills></app-skills>
            <app-experience></app-experience>
            <app-projects></app-projects>
            <app-contact></app-contact>
        </main>
    `,
})
export class HomeComponent implements OnInit {
    private seoService = inject(SeoService);

    ngOnInit(): void {
        this.seoService.updateHomeSeo();
    }
}

