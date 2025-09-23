import { NavigationItem } from './navigation.model';

export const navigationItems: NavigationItem[] = [
    {
        labelTag: 'Home',
        route: '/home',
        icon: 'bi bi-house-fill',
    },
    {
        labelTag: 'About',
        route: '/about',
        icon: 'bi bi-person-fill',
    },
    {
        labelTag: 'Skills',
        route: '/skills',
        icon: 'bi bi-code-slash',
    },
    {
        labelTag: 'Projects',
        route: '/projects',
        icon: 'bi bi-folder-fill',
    },
    {
        labelTag: 'Contact',
        route: '/contact',
        icon: 'bi bi-envelope-fill',
    },
];
