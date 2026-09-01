import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [RouterLink],
    template: `
        <main class="not-found-page" id="main-content">
            <div class="container not-found-inner">
                <div class="error-code">404</div>
                <h1 class="error-title">Page Not Found</h1>
                <p class="error-description">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <div class="error-actions">
                    <a routerLink="/" class="btn btn-primary">
                        ← Back to Home
                    </a>
                    <a routerLink="/" fragment="projects" class="btn btn-outline">
                        View Projects
                    </a>
                </div>
            </div>
        </main>
    `,
    styles: [`
        .not-found-page {
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 100px;
            padding-bottom: 60px;
            text-align: center;
        }

        .not-found-inner {
            max-width: 600px;
            margin: 0 auto;
        }

        .error-code {
            font-family: var(--font-mono);
            font-size: clamp(5rem, 15vw, 8rem);
            font-weight: 800;
            line-height: 1;
            margin-bottom: 16px;
            background: var(--gradient-hero);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .error-title {
            font-size: clamp(1.5rem, 3vw, 2.25rem);
            margin-bottom: 16px;
        }

        .error-description {
            color: var(--text-secondary);
            font-size: 1.05rem;
            margin-bottom: 32px;
            line-height: 1.7;
        }

        .error-actions {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
        }
    `],
})
export class NotFoundComponent implements OnInit {
    private seoService = inject(SeoService);

    ngOnInit(): void {
        this.seoService.updateNotFoundSeo();
    }
}

