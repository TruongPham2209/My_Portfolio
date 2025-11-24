import { About, PersonalInfo, Skill, Project, Contact, HomeData } from './portfolio.model';

export const personalInfo: PersonalInfo = {
    name: 'Truong Pham',
    profession: 'Full Stack Developer',
    description: 'Passionate about creating innovative web solutions',
    location: '9 Street, Linh Xuan, Thu Duc City, Ho Chi Minh City',
    ggMap: 'https://maps.app.goo.gl/1AwfwHvCkVhsqVpq8',
    email: 'phamtruong04112004@gmail.com',
    phone: '+84 379497587',
    profileImage: '/images/me.JPG',
    linkedin: 'https://www.linkedin.com/in/tr%C6%B0%E1%BB%9Dng-ph%E1%BA%A1m-a77216366/',
    facebook: 'https://www.facebook.com/truong.pham.127039',
    github: 'https://github.com/TruongPham2209',
    birthday: '2004-11-04',
};

export const aboutInfo: About = {
    biography: 'A developer with solid skills in web application development...',
    experience:
        'Completed multiple academic projects, building full-stack web applications with Spring Boot for backend and Angular/React for frontend, experiencing microservices architectures, caching, and security.',
    careerGoals:
        'Aspiring to become a specialized backend/full-stack developer focused on Spring Boot, participating in real projects, optimizing systems and building secure, efficient solutions.',

    personalImage: '/images/me.JPG',

    education: 'Bachelor of Information Technology, Ton Duc Thang University (TDTU), 2022-2026, GPA: 8.1/10',
    values: ['Integrity', 'Continuous Learning', 'Collaboration'],
    hobbies: ['Coding', 'Reading Tech Blogs', 'Traveling'],
    timeline: [
        {
            year: '2022',
            title: 'Started University',
            description: 'Began my journey at the Ton Duc Thang University.',
        },
        {
            year: '2024',
            title: 'Freelance Projects',
            description: 'Worked on various freelance projects, enhancing my full-stack development skills.',
        },
    ],
};

export const skillData: Skill = {
    softSkills: [
        {
            name: 'Communication',
            description: 'Ability to convey information effectively',
        },
        {
            name: 'Teamwork',
            description: 'Experience working in collaborative environments',
        },
        {
            name: 'Problem-Solving',
            description: 'Adept at analyzing issues and finding solutions',
        },
        {
            name: 'Adaptability',
            description: 'Quick to learn new technologies and adapt to changes',
        },
    ],
    technicalSkills: [
        {
            name: 'Frontend Development',
            icon: 'bi-code-slash',
            technologies: [
                {
                    name: 'Angular',
                    level: 90,
                    svg: '/images/techs/angular.svg',
                    description: 'Proficient in building dynamic web applications using Angular',
                },
                {
                    name: 'React',
                    level: 70,
                    svg: '/images/techs/react.svg',
                    description: 'Experience in developing user interfaces with React',
                },
                {
                    name: 'PHP',
                    level: 70,
                    svg: '/images/techs/php.svg',
                    description: 'Familiar with server-side scripting using PHP',
                },
                {
                    name: 'HTML/CSS/JavaScript',
                    level: 95,
                    svg: '/images/techs/html.svg',
                    description: 'Strong foundation in web technologies including HTML5, CSS3, SCSS, and JavaScript',
                },
            ],
        },
        {
            name: 'Backend Development',
            icon: 'bi-server',
            technologies: [
                {
                    name: 'Node.js',
                    level: 70,
                    svg: '/images/techs/nodejs.svg',
                    description: 'Experienced in developing server-side applications with Node.js',
                },
                {
                    name: 'Spring Boot',
                    level: 85,
                    svg: '/images/techs/spring.svg',
                    description: 'Skilled in building robust backend services using Spring Boot',
                },
                {
                    name: 'NestJS',
                    level: 70,
                    svg: '/images/techs/nestjs.svg',
                    description: 'Familiar with building scalable server-side applications using NestJS',
                },
                {
                    name: 'FastAPI',
                    level: 60,
                    svg: '/images/techs/fastapi.svg',
                    description: 'Familiar with building APIs using FastAPI',
                },
                {
                    name: 'Database',
                    level: 75,
                    svg: '/images/techs/database.svg',
                    description: 'Experienced with PostgreSQL, MySQL, MongoDB and Redis for data management',
                },
            ],
        },
        {
            name: 'Devops',
            icon: 'bi-cloud',
            technologies: [
                {
                    name: 'Docker',
                    level: 70,
                    svg: '/images/techs/docker.svg',
                    description: 'Skilled in containerizing applications using Docker',
                },
                {
                    name: 'AWS',
                    level: 70,
                    svg: '/images/techs/aws.svg',
                    description: 'Experienced in deploying applications on AWS',
                },
                {
                    name: 'Kafka',
                    level: 70,
                    svg: '/images/techs/kafka.svg',
                    description: 'Skilled in using Kafka for real-time data streaming',
                },
                {
                    name: 'Prometheus',
                    level: 55,
                    svg: '/images/techs/prometheus.svg',
                    description: 'Experienced in monitoring applications with Prometheus',
                },
            ],
        },
        {
            name: 'Tools & Platforms',
            icon: 'bi-gear',
            technologies: [
                {
                    name: 'Git',
                    level: 80,
                    svg: '/images/techs/git.svg',
                    description: 'Proficient in version control using Git',
                },
                {
                    name: 'Postman',
                    level: 80,
                    svg: '/images/techs/postman.svg',
                    description: 'Experienced in API testing using Postman',
                },
                {
                    name: 'IDE',
                    level: 90,
                    svg: '/images/techs/visual-studio.svg',
                    description: 'Proficient in using VS Code, IntelliJ IDEA, Visual Studio, ... for development',
                },
                {
                    name: 'AI Tools',
                    level: 80,
                    svg: '/images/techs/ai.svg',
                    description: 'Proficient in using AI tools for development, including code completion and chatbots',
                },
            ],
        },
    ],
};

export const contacts: Contact = {
    email: 'phamtruong04112004@gmail.com',
    phone: '+84 379497587',
    linkedin: 'https://linkedin.com/in/trường-phạm-a77216366/',
    twitter: 'https://twitter.com/nguyenvana',
    youtube: 'https://www.youtube.com/@Tr%C6%B0%E1%BB%9DngPh%E1%BA%A1m_2209',
    telegram: 'https://t.me/nguyenvana',
    github: 'https://github.com/TruongPham2209',
};

const ecommerceProject: Project = {
    title: 'E-commerce',
    description: 'Full-featured e-commerce web application',
    longDescription: `
        <div class="container my-4">
        <h2 class="mb-4 text-primary fw-bold">System Architecture</h2>
        <p class="lead">
            The system is built on a <span class="fw-bold">microservices</span> model, 
            where each service handles a separate business domain. 
            Services communicate via <span class="fst-italic">API Gateway</span>, 
            <span class="fst-italic">Kafka</span> and <span class="fst-italic">gRPC</span> 
            to optimize performance and scalability.
        </p>

        <div class="row">
            <div class="col-md-6 mb-4">
            <div class="card shadow-sm h-100">
                <div class="card-header bg-primary text-white fw-bold">Main Components</div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Authorization Server:</strong> Manages authentication & authorization.</li>
                <li class="list-group-item"><strong>API Gateway:</strong> Single entry point, integrated with Circuit Breaker & Rate Limiting.</li>
                <li class="list-group-item"><strong>User Service:</strong> Manages user information, supports 1-1 realtime chat with WebSocket security.</li>
                <li class="list-group-item"><strong>Product Service:</strong> Manages products, supports reviews.</li>
                <li class="list-group-item"><strong>Voucher Service:</strong> Manages discount codes and promotions.</li>
                <li class="list-group-item"><strong>Order Service:</strong> Orchestrates ordering process.</li>
                <li class="list-group-item"><strong>Address Service:</strong> Manages shipping addresses.</li>
                </ul>
            </div>
            </div>

            <div class="col-md-6 mb-4">
            <div class="card shadow-sm h-100">
                <div class="card-header bg-success text-white fw-bold">Infrastructure & Integration</div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Redis:</strong> Cache & session management.</li>
                <li class="list-group-item"><strong>Kafka:</strong> Event-driven architecture, supports asynchronous processing.</li>
                <li class="list-group-item"><strong>gRPC:</strong> Fast, efficient communication between microservices.</li>
                <li class="list-group-item"><strong>WebSocket Security:</strong> Security for realtime chat.</li>
                <li class="list-group-item"><strong>Prometheus:</strong> Collects metrics, monitors system.</li>
                <li class="list-group-item"><strong>Eureka:</strong> Service discovery, automatic service registration and discovery.</li>
                </ul>
            </div>
            </div>
        </div>

        <div class="card shadow-sm mb-4">
            <div class="card-header bg-warning fw-bold">🎯 Key Features</div>
            <div class="card-body">
            <ul class="list-group list-group-numbered">
                <li class="list-group-item">Registration / login with secure authorization.</li>
                <li class="list-group-item">Manage products, vouchers, shipping addresses.</li>
                <li class="list-group-item">Online ordering with multi-step process.</li>
                <li class="list-group-item">Product reviews and direct feedback.</li>
                <li class="list-group-item">Realtime chat between users and store owners.</li>
                <li class="list-group-item">System monitoring, load balancing, rate limiting, WebSocket security.</li>
                <li class="list-group-item">Using gRPC for communication between microservices.</li>
                <li class="list-group-item">Applying Kafka for event processing with EDA architecture.</li>
            </ul>
            </div>
        </div>

        <div class="alert alert-info">
            <h4 class="alert-heading">Conclusion</h4>
            <p>
            The <strong>microservices</strong> architecture makes the system easy to scale, 
            increases fault tolerance and flexibility in integrating additional services. 
            Applying <em>event-driven</em>, <em>caching</em> and <em>service discovery</em> 
            ensures performance and sustainable operation.
            </p>
        </div>
        </div>
    `,
    technologies: [
        {
            name: 'Angular',
            svg: '/images/techs/angular.svg',
            description: 'Using Angular to build dynamic web applications combined with Bootstrap 5',
        },
        {
            name: 'Spring Boot',
            svg: '/images/techs/spring.svg',
            description: 'Using Spring Boot to build backend services following microservices architecture',
        },
        {
            name: 'PostgreSQL',
            svg: '/images/techs/database.svg',
            description: 'Using PostgreSQL for relational database management',
        },
        {
            name: 'Stripe',
            svg: '/images/techs/stripe.svg',
            description: 'Using Stripe to integrate online payment processing',
        },
        {
            name: 'Kafka & gRPC',
            svg: '/images/techs/kafka.svg',
            description:
                'Using Kafka for event processing with EDA architecture and gRPC for communication between microservices',
        },
        {
            name: 'Prometheus & Eureka',
            svg: '/images/techs/prometheus.svg',
            description: 'Using Prometheus for system monitoring and Eureka for service discovery',
        },
        {
            name: 'Redis',
            svg: '/images/techs/redis.svg',
            description: 'Using Redis to store cache and improve system performance',
        },
        {
            name: 'Oauth2 Flow',
            svg: '/images/techs/oauth.svg',
            description: 'Using OAuth2 for centralized user authentication and authorization, ensuring system security',
        },
        {
            name: 'Cloudinary',
            svg: '/images/techs/cloudinary.svg',
            description:
                'Using Cloudinary to store and manage images, videos, supporting content optimization and distribution.',
        },
    ],
    thumbnail: '/images/projects/Ecommerce.png',
    backendGithubUrl: 'https://github.com/TruongPham2209/Ecommerce_Spring_Boot',
    frontendGithubUrl: 'https://github.com/TruongPham2209/Ecommerce_Angular',
    youtubeUrl: 'https://youtu.be/RUddFcMiglE',
    featured: true,
    architecture: 'Microservices',
};

const elearningProject: Project = {
    title: 'E-learning Platform',
    description: 'Comprehensive online learning platform',
    longDescription: `
    <div class="container my-5">
        <header class="mb-4 text-center">
            <h2 class="fw-bold text-success">E-Learning Microservices System</h2>
            <p class="lead text-muted">
            A modern online learning platform, focused on <span class="fw-semibold">scalability</span>, 
            <span class="fw-semibold">security</span> and <span class="fw-semibold">user experience</span>.
            </p>
        </header>

        <!-- Các tính năng chính -->
        <section class="mb-5">
            <h4 class="mb-3"><span class="badge bg-warning text-dark">🔹 Key Features</span></h4>
            <div class="accordion" id="featureAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header ps-2">
                    👥 User Management
                </h2>
                <div class="accordion-body">
                    Supports multiple roles: instructor, student, administrator; flexible authorization.
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header p-2">
                    📅 Schedule & Online Classes
                </h2>
                <div class="accordion-body">
                    Manage timetables, realtime classes, easy progress tracking.
                </div>
            </div>

            <div class="accordion-item p-2">
                <h2 class="accordion-header">
                    📂 Document & Assignment Management
                </h2>
                <div class="accordion-body">
                    Upload documents, announcements, assignments; supports multiple formats.
                </div>
            </div>

            <div class="accordion-item p-2">
                <h2 class="accordion-header">
                    ✅ Assignment Submission & Progress Tracking
                </h2>
                <div class="accordion-body">
                    Students can submit assignments online, instructors track & grade directly.
                </div>
            </div>

            <div class="accordion-item p-2">
                <h2 class="accordion-header">
                    📊 Exam & Class Management
                </h2>
                <div class="accordion-body">
                    Exam ban list, attendance, and real-time ongoing class tracking.
                </div>
            </div>
            </div>
        </section>

        <!-- Kết luận -->
        <section class="text-center">
            <div class="alert alert-success shadow-sm">
            <h5 class="fw-bold">💡 Conclusion</h5>
            <p>
                The combination of <strong>microservices</strong> + <strong>monitoring</strong> + <strong>modern security</strong> 
                creates a powerful, scalable and maintainable e-learning system. 
                This is the optimal platform for deploying online learning at scale.
            </p>
            </div>
        </section>
    </div>
    `,
    technologies: [
        {
            name: 'Angular',
            svg: '/images/techs/angular.svg',
            description:
                'Using Angular as the main framework to build user interface, combined with Bootstrap 5 to create an intuitive and friendly experience.',
        },
        {
            name: 'Spring Boot',
            svg: '/images/techs/spring.svg',
            description:
                'Using Spring Boot to develop server-side applications, providing RESTful API for Angular application.',
        },
        {
            name: 'PostgreSQL',
            svg: '/images/techs/database.svg',
            description:
                'Using PostgreSQL as relational database management system to store and manage application data.',
        },
        {
            name: 'MongoDB',
            svg: '/images/techs/mongodb.svg',
            description:
                'Using MongoDB as NoSQL database management system to store data related to logging and user operations.',
        },
        {
            name: 'gRPC & Kafka',
            svg: '/images/techs/kafka.svg',
            description:
                'Using gRPC for efficient communication between microservices, while Kafka is used to process asynchronous events and communication between services.',
        },
        {
            name: 'Prometheus & Eureka',
            svg: '/images/techs/prometheus.svg',
            description:
                'Using Prometheus to monitor performance and health of services, while Eureka is used for service discovery, helping microservices find and communicate with each other flexibly.',
        },
        {
            name: 'Oauth2 Flow',
            svg: '/images/techs/oauth.svg',
            description:
                'Using OAuth2 for user authentication and authorization, ensuring security for APIs and sensitive data.',
        },
    ],
    thumbnail: '/images/projects/Elearning.png',
    backendGithubUrl: 'https://github.com/TruongPham2209/Elearning_Spring_Boot/',
    frontendGithubUrl: 'https://github.com/TruongPham2209/Elearning_Angular/',
    youtubeUrl: 'https://youtu.be/jr5KcRAUL3M',
    featured: true,
    architecture: 'Microservices',
};

const bookingAppProject: Project = {
    title: 'Booking App',
    description: 'A full-featured online booking platform',
    longDescription: `
        <div class="container my-5">
            <!-- Header -->
            <div class="text-center mb-4">
                <h2 class="fw-bold text-primary">🚀 Booking App - Travel Booking Application</h2>
                <p class="lead text-muted">
                Online booking application with <strong>fullstack architecture</strong>, combining 
                <span class="fw-semibold">Spring Boot</span> (REST API) and 
                <span class="fw-semibold">Angular</span> (UI).
                </p>
            </div>

            <!-- Technologies -->
            <div class="row g-3 mb-5">
                <div class="col-md-3">
                <div class="p-3 border rounded shadow-sm bg-light">
                    <span class="fw-bold">Backend:</span> Java Spring Boot
                </div>
                </div>
                <div class="col-md-3">
                <div class="p-3 border rounded shadow-sm">
                    <span class="fw-bold">Frontend:</span> Angular
                </div>
                </div>
                <div class="col-md-3">
                <div class="p-3 border rounded shadow-sm bg-light">
                    <span class="fw-bold">Bảo mật:</span> JWT Authentication
                </div>
                </div>
                <div class="col-md-3">
                <div class="p-3 border rounded shadow-sm">
                    <span class="fw-bold">Hiệu năng:</span> Redis Caching
                </div>
                </div>
            </div>

            <!-- Demo tính năng -->
            <div class="card shadow-sm mb-4">
                <div class="card-header bg-success text-white fw-bold">
                🌐 Web Interface Demo
                </div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">✅ Registration, login with JWT security</li>
                    <li class="list-group-item">✅ Search hotels / travel rooms</li>
                    <li class="list-group-item">✅ Book rooms and manage booking history</li>
                    <li class="list-group-item">✅ Manage promotional programs</li>
                    <li class="list-group-item">✅ Rate hotels / travel rooms</li>
                    <li class="list-group-item">✅ View room details with information & visual images</li>
                    <li class="list-group-item">✅ High performance thanks to Redis Cache optimizing data query speed</li>
                </ul>
                </div>
            </div>

            <!-- Kết luận -->
            <div class="alert alert-info shadow-sm">
                <h5 class="fw-bold">💡 Conclusion</h5>
                <p>
                Booking App is a sample project combining <strong>Spring Boot</strong> and <strong>Angular</strong> 
                in fullstack architecture. Redis is integrated as a <strong>caching</strong> solution 
                to reduce database load and improve response speed, providing a better user experience.
                </p>
            </div>
        </div>
        `,
    technologies: [
        {
            name: 'Angular',
            svg: '/images/techs/angular.svg',
            description:
                'Using Angular as the main framework to build user interface, combined with Bootstrap 5 to create an intuitive and friendly experience.',
        },
        {
            name: 'Spring Boot',
            svg: '/images/techs/spring.svg',
            description:
                'Using Spring Boot to develop server-side applications, providing RESTful API for Angular application.',
        },
        {
            name: 'PostgreSQL',
            svg: '/images/techs/postgresql.svg',
            description:
                'Using PostgreSQL as relational database management system to store and manage application data.',
        },
        {
            name: 'Redis',
            svg: '/images/techs/redis.svg',
            description:
                'Using Redis as NoSQL database management system to store and manage session data, helping to increase data access speed.',
        },
        {
            name: 'JWT',
            svg: '/images/techs/jwt.svg',
            description:
                'Using JWT for user authentication and authorization, ensuring security for APIs and sensitive data.',
        },
    ],
    thumbnail: '/images/projects/Booking-app.png',
    backendGithubUrl: 'https://github.com/TruongPham2209/Booking_App_Spring_Boot',
    frontendGithubUrl: 'https://github.com/TruongPham2209/Booking_App_Angular',
    youtubeUrl: 'https://www.youtube.com/watch?v=sleuKoKooi8',
    featured: false,
    architecture: 'Monolithic',
};

const realEstateProject: Project = {
    title: 'Real Estate Platform',
    description: 'A full-featured online real estate platform',
    longDescription: `
        <div class="container my-5">
            <!-- Hero Section -->
            <div class="text-center mb-5">
                <h2 class="fw-bold text-primary">🚀 Real Estate Platform</h2>
                <p class="lead text-muted">
                Platform for posting <strong>buying, selling & renting real estate</strong>, developed with 
                kiến trúc <span class="fw-semibold">microservices</span> hiện đại.
                </p>
            </div>

            <!-- Công nghệ -->
            <section class="mb-5">
                <h4 class="mb-3"><span class="badge bg-info text-dark">🔹 Technologies Used</span></h4>
                <div class="row g-3">
                <div class="col-md-3"><div class="p-3 border rounded bg-light shadow-sm">Spring Boot (Java) – Backend</div></div>
                <div class="col-md-3"><div class="p-3 border rounded shadow-sm">Angular – Frontend</div></div>
                <div class="col-md-3"><div class="p-3 border rounded bg-light shadow-sm">OAuth2 – Bảo mật & phân quyền</div></div>
                <div class="col-md-3"><div class="p-3 border rounded shadow-sm">Netflix Eureka – Service Discovery</div></div>
                <div class="col-md-3"><div class="p-3 border rounded shadow-sm">Spring Cloud Gateway – API Gateway</div></div>
                <div class="col-md-3"><div class="p-3 border rounded bg-light shadow-sm">Kafka – Event Streaming</div></div>
                <div class="col-md-3"><div class="p-3 border rounded shadow-sm">Feign Client – Service-to-Service</div></div>
                <div class="col-md-3"><div class="p-3 border rounded bg-light shadow-sm">Redis Caching – Performance</div></div>
                </div>
            </section>

            <!-- Microservices -->
            <section class="mb-5">
                <h4 class="mb-3"><span class="badge bg-success">⚙️ Main Microservices</span></h4>
                <div class="row row-cols-1 row-cols-md-2 g-3">
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">Authentication Service</h6>
                        <p>Authentication & user session management via OAuth2.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">User Service</h6>
                        <p>Manage user profiles & information.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">Property Service</h6>
                        <p>Manage real estate listings (buy, sell, rent).</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">Media Service</h6>
                        <p>Store & manage real estate images, videos.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">Notification Service</h6>
                        <p>Send notifications via email, SMS or realtime event.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">Payment Service</h6>
                        <p>Online card payment to upgrade listing package, push VIP, advertise.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">Caching Layer (Redis)</h6>
                        <p>Cache frequently accessed data (featured listings, categories, user info).</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <!-- Luồng hoạt động -->
            <section>
                <h4 class="mb-3"><span class="badge bg-warning text-dark">📊 Workflow</span></h4>
                <ol class="list-group list-group-numbered">
                <li class="list-group-item">User logs into system</li>
                <li class="list-group-item">Post real estate listing via Property Service</li>
                <li class="list-group-item">OAuth2 authentication & authorization</li>
                <li class="list-group-item">Property Service saves listing and sends event via Kafka</li>
                <li class="list-group-item">Notification Service sends notifications (Email / SMS / Realtime)</li>
                <li class="list-group-item">Redis caches popular data to optimize performance</li>
                <li class="list-group-item">User can pay via Payment Service to upgrade listing</li>
                </ol>
            </section>

            <!-- Kết luận -->
            <div class="alert alert-primary mt-5 shadow-sm">
                <h5 class="fw-bold">💡 Conclusion</h5>
                <p>
                <strong>Real Estate Platform</strong> applies <em>microservices</em> architecture with comprehensive modern technologies 
                (Spring Boot, Angular, Kafka, Redis, OAuth2). The system not only optimizes performance, 
                but is also easy to scale and maintain, ready for large-scale real estate commerce platforms.
                </p>
            </div>
        </div>
        `,
    technologies: [
        {
            name: 'Angular',
            svg: '/images/techs/angular.svg',
            description: 'Using Angular to build dynamic web applications combined with Bootstrap 5',
        },
        {
            name: 'Spring Boot',
            svg: '/images/techs/spring.svg',
            description: 'Using Spring Boot to develop backend applications following microservices architecture',
        },
        {
            name: 'Redis',
            svg: '/images/techs/redis.svg',
            description: 'Using Redis to store cache and improve system performance',
        },
        {
            name: 'Stripe',
            svg: '/images/techs/stripe.svg',
            description: 'Using Stripe to process online payments',
        },
        {
            name: 'Kafka',
            svg: '/images/techs/kafka.svg',
            description: 'Using Kafka to process events with EDA architecture and communication between services',
        },
        {
            name: 'Oauth2 Flow',
            svg: '/images/techs/oauth.svg',
            description: 'Using OAuth2 for centralized user authentication and authorization, ensuring system security',
        },
        {
            name: 'Eureka & Actuator',
            svg: '/images/techs/Spring_Cloud.png',
            description:
                'Using Eureka & Actuator for automatic service registration and discovery, supporting service discovery in microservices architecture',
        },
    ],
    thumbnail: '/images/projects/Real-estate.png',
    backendGithubUrl: 'https://github.com/TruongPham2209/Real_Estate_Spring_Boot',
    frontendGithubUrl: 'https://github.com/TruongPham2209/Real_Estate_Angular',
    youtubeUrl: 'https://youtu.be/qBPi8B_B_WA',
    featured: false,
    architecture: 'Microservices',
};

export const highlightedProjects: Project[] = [ecommerceProject, elearningProject];

export const projects: Project[] = [ecommerceProject, elearningProject, bookingAppProject, realEstateProject];

export const homeData: HomeData = {
    profession: 'Full-stack Developer',
    bio: 'I can handle both Frontend and Backend, but my strength lies in developing server-side systems with Spring Boot. I focus on building microservices architecture, optimizing performance and ensuring security for web applications.',
    highlightedTech: [
        {
            name: 'Angular',
            icon: 'bi-code-slash',
        },
        {
            name: 'Spring Boot',
            icon: 'bi-cpu',
        },
        {
            name: 'PostgreSQL',
            icon: 'bi-database',
        },
        {
            name: 'Docker',
            icon: 'bi-box-seam',
        },
        {
            name: 'AWS',
            icon: 'bi-cloud-check',
        },
    ],
    highlightedProjects: highlightedProjects,
};
