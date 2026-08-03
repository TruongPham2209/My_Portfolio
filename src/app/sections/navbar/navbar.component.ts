import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navItems, NavItem, personalInfo } from '../../data/portfolio.data';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    navItems: NavItem[] = navItems;
    activeSection = 'home';
    isScrolled = false;
    isMobileMenuOpen = false;
    name = personalInfo.name;

    @HostListener('window:scroll')
    onScroll(): void {
        this.isScrolled = window.scrollY > 50;
        this.updateActiveSection();
    }

    scrollTo(sectionId: string): void {
        this.isMobileMenuOpen = false;
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    toggleMobileMenu(): void {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    private updateActiveSection(): void {
        const sections = this.navItems.map((item) => item.sectionId);
        for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
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
