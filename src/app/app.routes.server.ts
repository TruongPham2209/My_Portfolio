import { RenderMode, ServerRoute } from '@angular/ssr';
import { projects } from './data/portfolio.data';

export const serverRoutes: ServerRoute[] = [
    {
        path: '',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'projects/:slug',
        renderMode: RenderMode.Prerender,
        async getPrerenderParams() {
            return projects.map((project) => ({ slug: project.slug }));
        },
    },
    {
        path: '404',
        renderMode: RenderMode.Prerender,
    },
    {
        path: '**',
        renderMode: RenderMode.Prerender,
    },
];
