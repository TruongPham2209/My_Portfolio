import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { ProjectItem, personalInfo } from '../../data/portfolio.data';

export interface SeoConfig {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'profile';
    jsonLd?: object | object[];
    noIndex?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class SeoService {
    private titleService = inject(Title);
    private metaService = inject(Meta);
    private document = inject(DOCUMENT);

    private readonly siteUrl = 'https://truongpham.dev';
    private readonly defaultImage = 'https://truongpham.dev/images/me.JPG';
    private readonly author = personalInfo.name;

    setSeoData(config: SeoConfig): void {
        // Set page Title
        this.titleService.setTitle(config.title);

        // Standard Meta Tags
        this.metaService.updateTag({ name: 'description', content: config.description });
        if (config.keywords) {
            this.metaService.updateTag({ name: 'keywords', content: config.keywords });
        }
        this.metaService.updateTag({ name: 'author', content: this.author });
        this.metaService.updateTag({
            name: 'robots',
            content: config.noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        });

        // Open Graph Meta Tags
        this.metaService.updateTag({ property: 'og:title', content: config.title }, "property='og:title'");
        this.metaService.updateTag({ property: 'og:description', content: config.description }, "property='og:description'");
        this.metaService.updateTag({ property: 'og:url', content: config.canonicalUrl }, "property='og:url'");
        this.metaService.updateTag({ property: 'og:type', content: config.ogType || 'website' }, "property='og:type'");
        this.metaService.updateTag({ property: 'og:image', content: config.ogImage || this.defaultImage }, "property='og:image'");
        this.metaService.updateTag({ property: 'og:site_name', content: `${this.author} — Portfolio` }, "property='og:site_name'");

        // Twitter Card Meta Tags
        this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.metaService.updateTag({ name: 'twitter:title', content: config.title });
        this.metaService.updateTag({ name: 'twitter:description', content: config.description });
        this.metaService.updateTag({ name: 'twitter:image', content: config.ogImage || this.defaultImage });

        // Canonical Tag
        this.setCanonicalUrl(config.canonicalUrl);

        // JSON-LD Structured Data
        if (config.jsonLd) {
            this.setJsonLd(config.jsonLd);
        }
    }

    updateHomeSeo(): void {
        const title = `${personalInfo.name} — ${personalInfo.title} | Distributed Systems & Web Engineering`;
        const description = `${personalInfo.name} is a ${personalInfo.title} specializing in Java Spring Boot, .NET Core, Angular, Next.js, Kafka, Redis, and Cloud-Native scalable architectures.`;
        const keywords =
            'Full Stack Software Engineer, Software Engineer, Backend Engineer, Angular, React, Java, Spring Boot, .NET Core, Next.js, TypeScript, Microservices, Kafka, Redis, PostgreSQL, AWS, Docker, Truong Pham';

        const jsonLd = [
            {
                '@context': 'https://schema.org',
                '@type': 'Person',
                '@id': `${this.siteUrl}/#person`,
                name: personalInfo.name,
                jobTitle: personalInfo.title,
                url: this.siteUrl,
                image: `${this.siteUrl}${personalInfo.profileImage}`,
                sameAs: [personalInfo.github, personalInfo.linkedin, personalInfo.facebook],
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Ho Chi Minh City',
                    addressCountry: 'Vietnam',
                },
                email: `mailto:${personalInfo.email}`,
                knowsAbout: [
                    'Software Engineering',
                    'Full Stack Web Development',
                    'Distributed Systems',
                    'Microservices Architecture',
                    'Java Spring Boot',
                    '.NET Core',
                    'Angular',
                    'Next.js & React',
                    'Apache Kafka',
                    'Redis Caching',
                    'PostgreSQL & Database Optimization',
                    'Amazon Web Services (AWS)',
                    'Docker & CI/CD Pipelines',
                ],
            },
            {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': `${this.siteUrl}/#website`,
                url: this.siteUrl,
                name: `${personalInfo.name} Portfolio`,
                description: personalInfo.tagline,
                publisher: {
                    '@id': `${this.siteUrl}/#person`,
                },
            },
            {
                '@context': 'https://schema.org',
                '@type': 'ProfilePage',
                '@id': `${this.siteUrl}/#profilepage`,
                url: this.siteUrl,
                name: title,
                mainEntity: {
                    '@id': `${this.siteUrl}/#person`,
                },
            },
        ];

        this.setSeoData({
            title,
            description,
            keywords,
            canonicalUrl: this.siteUrl,
            ogImage: `${this.siteUrl}${personalInfo.profileImage}`,
            ogType: 'profile',
            jsonLd,
        });
    }

    updateProjectSeo(project: ProjectItem): void {
        const canonicalUrl = `${this.siteUrl}/projects/${project.slug}`;
        const title = `${project.title} — ${project.subtitle || 'Software Architecture & Case Study'} | ${personalInfo.name}`;
        const description = `${project.overview.substring(0, 155)}...`;
        const keywords = `${project.techStack.join(', ')}, ${project.title}, ${project.architecture} Architecture, Full Stack Case Study, ${personalInfo.name}`;
        const ogImage = project.thumbnail.startsWith('http') ? project.thumbnail : `${this.siteUrl}${project.thumbnail}`;

        const jsonLd = [
            {
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: project.title,
                headline: project.subtitle || project.title,
                description: project.overview,
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Cross-platform, Web, Cloud',
                image: ogImage,
                author: {
                    '@type': 'Person',
                    name: personalInfo.name,
                    url: this.siteUrl,
                },
                keywords: project.techStack.join(', '),
                url: canonicalUrl,
                codeRepository: project.backendGithub || project.frontendGithub,
            },
            {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: this.siteUrl,
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Projects',
                        item: `${this.siteUrl}/#projects`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: project.title,
                        item: canonicalUrl,
                    },
                ],
            },
        ];

        this.setSeoData({
            title,
            description,
            keywords,
            canonicalUrl,
            ogImage,
            ogType: 'article',
            jsonLd,
        });
    }

    updateNotFoundSeo(): void {
        this.setSeoData({
            title: `404 — Page Not Found | ${personalInfo.name}`,
            description: 'The requested page could not be found on Truong Pham portfolio website.',
            canonicalUrl: this.siteUrl,
            noIndex: true,
        });
    }

    private setCanonicalUrl(url: string): void {
        let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
        if (!link) {
            link = this.document.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.document.head.appendChild(link);
        }
        link.setAttribute('href', url);
    }

    private setJsonLd(schema: object | object[]): void {
        let script: HTMLScriptElement | null = this.document.querySelector("script[id='app-jsonld']");
        if (!script) {
            script = this.document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            script.setAttribute('id', 'app-jsonld');
            this.document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(schema);
    }
}
