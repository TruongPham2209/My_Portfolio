import { Component } from '@angular/core';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        NavbarComponent,
        HeroComponent,
        AboutComponent,
        SkillsComponent,
        ExperienceComponent,
        ProjectsComponent,
        ContactComponent,
        FooterComponent,
    ],
    template: `
        <app-navbar></app-navbar>
        <main>
            <app-hero></app-hero>
            <app-about></app-about>
            <app-skills></app-skills>
            <app-experience></app-experience>
            <app-projects></app-projects>
            <app-contact></app-contact>
        </main>
        <app-footer></app-footer>
    `,
})
export class AppComponent {}
