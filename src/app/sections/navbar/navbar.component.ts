import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { navItems, NavItem, personalInfo } from '../../data/portfolio.data';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    private platformId = inject(PLATFORM_ID);
    private document = inject(DOCUMENT);

    navItems: NavItem[] = navItems;
    activeSection = 'home';
    isScrolled = false;
    isMobileMenuOpen = false;
    name = personalInfo.name;

    @HostListener('window:scroll')
    onScroll(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.isScrolled = window.scrollY > 50;
        this.updateActiveSection();
    }

    scrollTo(sectionId: string): void {
        this.isMobileMenuOpen = false;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const element = this.document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    toggleMobileMenu(): void {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    private updateActiveSection(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const sections = this.navItems.map((item) => item.sectionId);
        for (let i = sections.length - 1; i >= 0; i--) {
            const el = this.document.getElementById(sections[i]);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 120) {
                    this.activeSection = sections[i];
                    return;
                }
            }
        }
        this.activeSection = 'home';
    }
}
