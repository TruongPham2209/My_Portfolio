import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { navigationItems } from '../../models/navigation.data';
import { NavigationItem } from '../../models/navigation.model';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    navigationItems: NavigationItem[] = navigationItems;
    currentRoute: string = '';

    constructor(private router: Router) {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            const tree = this.router.parseUrl(event.urlAfterRedirects);

            this.currentRoute = tree.root.children['primary']?.segments.map((s) => s.path).join('/') || '';
        });
    }

    isActive(route: string): boolean {
        const currentRoute = (this.currentRoute.startsWith('/') ? '' : '/') + this.currentRoute;
        return currentRoute.startsWith(route);
    }

    getCurrentRoute(): string {
        return this.currentRoute.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()).toUpperCase();
    }
}
