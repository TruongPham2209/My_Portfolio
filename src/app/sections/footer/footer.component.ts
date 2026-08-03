import { Component } from '@angular/core';
import { personalInfo } from '../../data/portfolio.data';

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
        <footer class="footer" role="contentinfo">
            <div class="container footer-inner">
                <div class="footer-left">
                    <span class="footer-brand">&lt;/&gt; {{ name }}</span>
                    <span class="footer-copy">&copy; {{ year }} All rights reserved.</span>
                </div>
                <div class="footer-right">
                    <span class="footer-built">Built with Angular</span>
                </div>
            </div>
        </footer>
    `,
    styles: [`
        .footer {
            padding: 32px 0;
            border-top: 1px solid var(--border-color);
            background: var(--bg-secondary);
        }

        .footer-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
        }

        .footer-left {
            display: flex;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
        }

        .footer-brand {
            font-family: var(--font-mono);
            font-size: 0.9rem;
            color: var(--accent-primary);
            font-weight: 600;
        }

        .footer-copy {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        .footer-built {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            color: var(--text-muted);
            background: rgba(255, 255, 255, 0.04);
            padding: 4px 12px;
            border-radius: 100px;
            border: 1px solid var(--border-subtle);
        }

        @media (max-width: 480px) {
            .footer-inner {
                flex-direction: column;
                text-align: center;
            }
        }
    `],
})
export class FooterComponent {
    name = personalInfo.name;
    year = new Date().getFullYear();
}
