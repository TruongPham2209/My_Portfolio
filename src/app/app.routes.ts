import { Routes } from '@angular/router';
import { WebComponent } from './layouts/web/web.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: WebComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'skills', component: SkillsComponent },
            { path: 'projects', component: ProjectsComponent },
            {
                path: '**',
                redirectTo: 'home',
                pathMatch: 'full',
            },
        ],
    },
];
