import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);

export const slideInLeft = trigger('slideInLeft', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
]);

export const slideInRight = trigger('slideInRight', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
]);

export const staggerAnimation = trigger('staggerAnimation', [
    transition(':enter', [
        query(
            ':enter',
            [
                style({ opacity: 0, transform: 'translateY(30px)' }),
                stagger(100, [animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))]),
            ],
            { optional: true },
        ),
    ]),
]);

export const scaleIn = trigger('scaleIn', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
    ]),
]);

export const modalAnimation = trigger('modalAnimation', [
    state('in', style({ opacity: 1, transform: 'scale(1)' })),
    transition('void => *', [style({ opacity: 0, transform: 'scale(0.9)' }), animate('300ms ease-in-out')]),
    transition('* => void', [animate('300ms ease-in-out', style({ opacity: 0, transform: 'scale(0.9)' }))]),
]);
