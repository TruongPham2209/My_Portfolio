import { Directive, ElementRef, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[appScrollReveal]',
    standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
    private observer?: IntersectionObserver;
    private platformId = inject(PLATFORM_ID);
    private el = inject(ElementRef<HTMLElement>);

    ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        if (typeof IntersectionObserver === 'undefined') {
            return;
        }

        this.el.nativeElement.classList.add('reveal');

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        this.observer?.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            },
        );

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy(): void {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
