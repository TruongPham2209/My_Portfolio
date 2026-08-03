/* ============================================
   PORTFOLIO DATA — Truong Pham
   Full Stack Software Engineer
   ============================================ */

// ─── Interfaces ────────────────────────────

export interface PersonalInfo {
    name: string;
    title: string;
    tagline: string;
    email: string;
    phone: string;
    location: string;
    profileImage: string;
    github: string;
    linkedin: string;
    facebook: string;
    cvUrl: string;
}

export interface AboutHighlight {
    value: string;
    label: string;
    icon: string;
}

export interface SkillCategory {
    name: string;
    icon: string;
    colorClass: string;
    skills: string[];
    description?: string;
}

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    location?: string;
    achievements: string[];
    techStack: string[];
}

export interface ProjectItem {
    title: string;
    overview: string;
    responsibilities: string[];
    challenges: string;
    solutions: string;
    achievements: string[];
    techStack: string[];
    architecture: string;
    thumbnail: string;
    backendGithub?: string;
    frontendGithub?: string;
    youtubeUrl?: string;
    liveUrl?: string;
    featured: boolean;
}

export interface EducationItem {
    institution: string;
    degree: string;
    period: string;
    gpa: string;
    highlights: string[];
}

// ─── Personal Info ─────────────────────────

export const personalInfo: PersonalInfo = {
    name: 'Truong Pham',
    title: 'Full Stack Software Engineer',
    tagline: 'Building scalable web applications, distributed systems, and cloud-native software.',
    email: 'phamtruong04112004@gmail.com',
    phone: '+84 379497587',
    location: 'Ho Chi Minh City, Vietnam',
    profileImage: '/images/me.JPG',
    github: 'https://github.com/TruongPham2209',
    linkedin: 'https://www.linkedin.com/in/truong-pham-backend/',
    facebook: 'https://www.facebook.com/truong.pham.127039',
    cvUrl: '/CV_TruongPham.pdf',
};

// ─── Navigation ────────────────────────────

export interface NavItem {
    label: string;
    sectionId: string;
    icon: string;
}

export const navItems: NavItem[] = [
    { label: 'Home', sectionId: 'home', icon: '⌂' },
    { label: 'About', sectionId: 'about', icon: '◉' },
    { label: 'Skills', sectionId: 'skills', icon: '⚡' },
    { label: 'Experience', sectionId: 'experience', icon: '◈' },
    { label: 'Projects', sectionId: 'projects', icon: '◆' },
    { label: 'Contact', sectionId: 'contact', icon: '✉' },
];

// ─── About ─────────────────────────────────

export const aboutSummary: string =
    `Software Engineer with 2+ years of experience designing and developing modern web applications, scalable distributed systems, and cloud-native solutions. ` +
    `Proficient across both Frontend and Backend engineering, with a disciplined approach to Clean Code, Clean Architecture, and performance optimization. ` +
    `Strong problem-solving mindset with a focus on delivering high-reliability systems and business value. ` +
    `A proactive learner who quickly adapts to new tech stacks and industry standards. ` +
    `Leverages AI-assisted development tools to accelerate workflow efficiency, code quality, and technical documentation without sacrificing engineering rigor.`;

export const aboutHighlights: AboutHighlight[] = [
    { value: '2+', label: 'Years Experience', icon: '📅' },
    { value: '4+', label: 'Projects Delivered', icon: '🚀' },
    { value: '12+', label: 'Tech Stack Skills', icon: '⚙️' },
    { value: '∞', label: 'Lines of Code', icon: '💻' },
];

// ─── Education Data (embedded in About) ────

export const education: EducationItem = {
    institution: 'Ton Duc Thang University (TDTU)',
    degree: 'Bachelor of Information Technology',
    period: '2022 — 2026',
    gpa: '8.1 / 10',
    highlights: [
        'Specialized in Software Engineering and Distributed Systems',
        'Built multiple production-grade full-stack applications',
        'Hands-on experience with microservices architecture, cloud deployment, and CI/CD pipelines',
    ],
};

// ─── Skills ────────────────────────────────

export const skillCategories: SkillCategory[] = [
    {
        name: 'Backend',
        icon: '⚙️',
        colorClass: 'tag',
        skills: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'Spring Cloud',
            'Node.js',
            'NestJS',
            'Hibernate / JPA',
            'RESTful APIs',
        ],
    },
    {
        name: 'Frontend',
        icon: '🎨',
        colorClass: 'tag-emerald',
        skills: [
            'HTML5',
            'CSS3',
            'Sass/SCSS',
            'JavaScript (ES6+)',
            'TypeScript',
            'Angular',
            'React',
            'Bootstrap',
            'Responsive Design',
            'REST API Integration',
        ],
    },
    {
        name: 'AI-Assisted Development',
        icon: '🤖',
        colorClass: 'tag-blue',
        skills: ['Cursor', 'Copilot', 'Claude CLI', 'Antigravity CLI'],
        description:
            'Leveraging AI as a productivity multiplier — from code generation and refactoring to unit test creation, ' +
            'SQL optimization, API design, and documentation. AI enhances velocity while maintaining engineering ownership and rigor.',
    },
    {
        name: 'Database',
        icon: '🗄️',
        colorClass: 'tag-purple',
        skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
    },
    {
        name: 'DevOps',
        icon: '🐳',
        colorClass: 'tag-blue',
        skills: ['Docker', 'GitHub Actions', 'Nginx', 'Linux', 'CI/CD Pipelines'],
    },
    {
        name: 'Cloud',
        icon: '☁️',
        colorClass: 'tag-amber',
        skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS IAM'],
    },
    {
        name: 'Architecture',
        icon: '🏛️',
        colorClass: 'tag',
        skills: ['Microservices', 'Event-Driven (Kafka)', 'REST API', 'gRPC', 'Clean Architecture', 'API Gateway'],
    },
    {
        name: 'Testing & Monitoring',
        icon: '🧪',
        colorClass: 'tag-emerald',
        skills: ['JUnit 5', 'Mockito', 'Postman', 'Integration Testing', 'Prometheus', 'Eureka Service Discovery'],
    },
];

// ─── Experience ────────────────────────────

export const experiences: ExperienceItem[] = [
    {
        company: 'UNICCS Vietnam',
        role: 'IT Engineer',
        period: 'Dec 2024 — Feb 2026',
        location: 'Ho Chi Minh City',
        achievements: [
            'Designed and implemented scalable backend features and database schemas aligned with client business requirements.',
            'Optimized SQL queries and database indexing strategies, reducing average data retrieval time by 40% across reporting modules.',
            'Automated deployment workflows for AWS EC2 and RDS environments, cutting release deployment time from 30 minutes to under 5 minutes.',
            'Built and maintained CI/CD pipelines that improved release reliability and reduced production incidents.',
            'Supported system monitoring and incident response using AWS CloudWatch and structured application logging.',
        ],
        techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'AWS EC2', 'AWS RDS', 'CI/CD', 'SQL Optimization'],
    },
    {
        company: 'Freelance',
        role: 'Software Developer',
        period: 'Jun 2024 — Sep 2025',
        location: 'Remote',
        achievements: [
            'Designed a secure document upload system using AWS S3 with pre-signed URLs, IAM policies, and lifecycle rules — reducing storage costs by 35%.',
            'Built RESTful APIs for a course registration platform using Node.js (Express), implementing JWT authentication with role-based authorization.',
            'Delivered end-to-end full-stack web solutions from database schema design to Linux VPS deployment for client applications.',
            'Implemented user-based access control and cloud S3 integration with modern frontend interfaces.',
        ],
        techStack: ['TypeScript', 'Angular', 'Node.js', 'AWS S3', 'JWT', 'PostgreSQL', 'Docker', 'Linux'],
    },
];

// ─── Projects ──────────────────────────────

export const projects: ProjectItem[] = [
    {
        title: 'E-Commerce Platform',
        overview:
            'Full-featured e-commerce system built on microservices architecture. Each service handles a separate business domain with inter-service communication via API Gateway, Kafka, and gRPC.',
        responsibilities: [
            'Architected the entire microservices ecosystem with 7 independent services',
            'Implemented OAuth2 authorization server for centralized authentication',
            'Designed event-driven order processing pipeline using Kafka',
            'Built real-time 1-1 chat system with WebSocket security',
        ],
        challenges:
            'Ensuring data consistency across distributed services during the ordering process while maintaining low latency.',
        solutions:
            'Implemented the Saga orchestration pattern via Kafka event streaming, with compensating transactions for rollback scenarios. Added Redis caching layer for frequently accessed product data.',
        achievements: [
            'Reduced API response time by 60% with Redis caching and query optimization',
            'Achieved 99.5% order processing reliability with saga-based orchestration',
            'Integrated Stripe payment gateway with secure webhook handling',
            'Deployed monitoring stack with Prometheus + Eureka for real-time service health tracking',
        ],
        techStack: [
            'Spring Boot',
            'Angular',
            'PostgreSQL',
            'Kafka',
            'gRPC',
            'Redis',
            'OAuth2',
            'Stripe',
            'Docker',
            'Prometheus',
        ],
        architecture: 'Microservices',
        thumbnail: '/images/projects/Ecommerce.png',
        backendGithub: 'https://github.com/TruongPham2209/Ecommerce_Spring_Boot',
        frontendGithub: 'https://github.com/TruongPham2209/Ecommerce_Angular',
        youtubeUrl: 'https://youtu.be/RUddFcMiglE',
        featured: true,
    },
    {
        title: 'E-Learning Platform',
        overview:
            'Comprehensive online learning system focused on scalability, security, and user experience. Supports multi-role access (instructor, student, admin) with real-time class management.',
        responsibilities: [
            'Developed microservices backend for user, course, and schedule management',
            'Implemented role-based authorization with OAuth2 for multi-tenant access',
            'Built assignment submission and progress tracking modules',
            'Integrated gRPC for efficient inter-service communication',
        ],
        challenges:
            'Managing real-time class sessions with concurrent users while maintaining consistent attendance tracking.',
        solutions:
            'Used WebSocket connections for real-time class state management and Kafka for asynchronous event processing of attendance records and grade updates.',
        achievements: [
            'Delivered full-featured LMS supporting 3 user roles with granular permissions',
            'Built real-time class tracking with attendance and exam ban-list management',
            'Achieved efficient service communication using gRPC, reducing inter-service latency by 45%',
            'Implemented monitoring with Prometheus and Eureka for service discovery',
        ],
        techStack: ['Spring Boot', 'Angular', 'PostgreSQL', 'MongoDB', 'Kafka', 'gRPC', 'OAuth2', 'Prometheus'],
        architecture: 'Microservices',
        thumbnail: '/images/projects/Elearning.png',
        backendGithub: 'https://github.com/TruongPham2209/Elearning_Spring_Boot/',
        frontendGithub: 'https://github.com/TruongPham2209/Elearning_Angular/',
        youtubeUrl: 'https://youtu.be/jr5KcRAUL3M',
        featured: true,
    },
    {
        title: 'Real Estate Platform',
        overview:
            'Online marketplace for buying, selling, and renting real estate. Built with modern microservices architecture featuring event-driven communication and comprehensive service discovery.',
        responsibilities: [
            'Designed microservices architecture with Spring Cloud Gateway as API entry point',
            'Implemented property listing service with advanced search and filtering',
            'Built notification system supporting email, SMS, and real-time events via Kafka',
            'Integrated Stripe for premium listing upgrades and advertising payments',
        ],
        challenges:
            'Handling high-volume property searches with complex filtering while maintaining fast response times.',
        solutions:
            'Implemented Redis caching for popular listings and categories, combined with optimized database indexing for search queries. Used Feign Client for clean service-to-service communication.',
        achievements: [
            'Built scalable property listing system with Redis-cached search results',
            'Implemented multi-channel notification system (email, SMS, real-time)',
            'Integrated payment processing for premium listing features via Stripe',
            'Deployed with Eureka service discovery and Spring Actuator monitoring',
        ],
        techStack: ['Spring Boot', 'Angular', 'PostgreSQL', 'Redis', 'Kafka', 'OAuth2', 'Stripe', 'Eureka'],
        architecture: 'Microservices',
        thumbnail: '/images/projects/Real-estate.png',
        backendGithub: 'https://github.com/TruongPham2209/Real_Estate_Spring_Boot',
        frontendGithub: 'https://github.com/TruongPham2209/Real_Estate_Angular',
        youtubeUrl: 'https://youtu.be/qBPi8B_B_WA',
        featured: false,
    },
    {
        title: 'Booking App',
        overview:
            'Travel booking application with fullstack architecture. Features hotel/room search, online booking management, and promotional programs with Redis-optimized performance.',
        responsibilities: [
            'Developed RESTful APIs for booking, search, and user management',
            'Implemented JWT authentication with role-based access control',
            'Built Redis caching layer for high-frequency data access patterns',
            'Designed responsive frontend with Angular and Bootstrap 5',
        ],
        challenges: 'Optimizing search performance for large datasets of hotel listings with multiple filter criteria.',
        solutions:
            'Implemented multi-level Redis caching strategy — cache-aside pattern for listing data and write-through for booking status updates. Reduced database load by 70% on search endpoints.',
        achievements: [
            'Reduced search API response time from 800ms to 120ms with Redis caching',
            'Built complete booking workflow with real-time availability checking',
            'Implemented promotional program management with automated discount application',
            'Delivered production-ready hotel rating and review system',
        ],
        techStack: ['Spring Boot', 'Angular', 'PostgreSQL', 'Redis', 'JWT', 'Docker'],
        architecture: 'Monolithic',
        thumbnail: '/images/projects/Booking-app.png',
        backendGithub: 'https://github.com/TruongPham2209/Booking_App_Spring_Boot',
        frontendGithub: 'https://github.com/TruongPham2209/Booking_App_Angular',
        youtubeUrl: 'https://www.youtube.com/watch?v=sleuKoKooi8',
        featured: false,
    },
];
