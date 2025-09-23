import { About, PersonalInfo, Skill, Project, Contact, HomeData } from './portfolio.model';

export const personalInfo: PersonalInfo = {
    name: 'Nguyễn Văn A',
    profession: 'Full Stack Developer',
    description: 'Passionate about creating innovative web solutions',
    location: '9 Street, Linh Xuan, Thu Duc City, Ho Chi Minh City',
    ggMap: 'https://maps.app.goo.gl/1AwfwHvCkVhsqVpq8',
    email: 'phamtruong04112004@gmail.com',
    phone: '+84 379497587',
    profileImage: '/images/me.JPG',
    linkedin: 'https://www.linkedin.com/in/nguyenvana',
    facebook: 'https://www.facebook.com/nguyenvana',
    github: 'https://github.com/nguyenvana',
    birthday: '2004-11-04',
};

export const aboutInfo: About = {
    biography: 'Là một developer có kỹ năng vững trong việc phát triển ứng dụng web...',
    experience:
        'Đã thực hiện nhiều dự án học tập trong quá trình học, xây dựng ứng dụng web full-stack với Spring Boot cho backend và Angular/React cho frontend, trải nghiệm các kiến trúc microservices, caching, và bảo mật.',
    careerGoals:
        'Mong muốn phát triển thành lập trình viên backend/full-stack chuyên sâu về Spring Boot, tham gia vào các dự án thực tế, tối ưu hệ thống và xây dựng giải pháp an toàn, hiệu quả.',

    personalImage: '/images/me.JPG',

    education: 'Cử nhân ngành Công nghệ Thông tin, Đại học Tôn Đức Thắng (TDTU), 2022-2026, GPA: 8.1/10',
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
    description: 'Ứng dụng web thương mại điện tử đầy đủ tính năng',
    longDescription: `
        <div class="container my-4">
        <h2 class="mb-4 text-primary fw-bold">Kiến trúc hệ thống</h2>
        <p class="lead">
            Hệ thống được xây dựng theo mô hình <span class="fw-bold">microservices</span>, 
            trong đó mỗi dịch vụ phụ trách một phạm vi nghiệp vụ riêng biệt. 
            Các dịch vụ giao tiếp qua <span class="fst-italic">API Gateway</span>, 
            <span class="fst-italic">Kafka</span> và <span class="fst-italic">gRPC</span> 
            để tối ưu hiệu năng và khả năng mở rộng.
        </p>

        <div class="row">
            <div class="col-md-6 mb-4">
            <div class="card shadow-sm h-100">
                <div class="card-header bg-primary text-white fw-bold">Thành phần chính</div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Authorization Server:</strong> Quản lý xác thực & phân quyền.</li>
                <li class="list-group-item"><strong>API Gateway:</strong> Điểm truy cập duy nhất, tích hợp Circuit Breaker & Rate Limiting.</li>
                <li class="list-group-item"><strong>User Service:</strong> Quản lý thông tin người dùng, hỗ trợ chat 1-1 realtime với bảo mật WebSocket.</li>
                <li class="list-group-item"><strong>Product Service:</strong> Quản lý sản phẩm, hỗ trợ review.</li>
                <li class="list-group-item"><strong>Voucher Service:</strong> Quản lý mã giảm giá, khuyến mãi.</li>
                <li class="list-group-item"><strong>Order Service:</strong> Điều phối quy trình đặt hàng.</li>
                <li class="list-group-item"><strong>Address Service:</strong> Quản lý địa chỉ giao hàng.</li>
                </ul>
            </div>
            </div>

            <div class="col-md-6 mb-4">
            <div class="card shadow-sm h-100">
                <div class="card-header bg-success text-white fw-bold">Hạ tầng & Tích hợp</div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Redis:</strong> Cache & session management.</li>
                <li class="list-group-item"><strong>Kafka:</strong> Event-driven architecture, hỗ trợ bất đồng bộ.</li>
                <li class="list-group-item"><strong>gRPC:</strong> Giao tiếp nhanh, hiệu quả giữa microservices.</li>
                <li class="list-group-item"><strong>WebSocket Security:</strong> Bảo mật cho chat realtime.</li>
                <li class="list-group-item"><strong>Prometheus:</strong> Thu thập metrics, giám sát hệ thống.</li>
                <li class="list-group-item"><strong>Eureka:</strong> Service discovery, đăng ký và tìm kiếm dịch vụ tự động.</li>
                </ul>
            </div>
            </div>
        </div>

        <div class="card shadow-sm mb-4">
            <div class="card-header bg-warning fw-bold">🎯 Các tính năng nổi bật</div>
            <div class="card-body">
            <ul class="list-group list-group-numbered">
                <li class="list-group-item">Đăng ký / đăng nhập với phân quyền bảo mật.</li>
                <li class="list-group-item">Quản lý sản phẩm, voucher, địa chỉ giao hàng.</li>
                <li class="list-group-item">Đặt hàng trực tuyến với quy trình nhiều bước.</li>
                <li class="list-group-item">Đánh giá sản phẩm và phản hồi trực tiếp.</li>
                <li class="list-group-item">Chat realtime giữa người dùng với chủ cửa hàng.</li>
                <li class="list-group-item">Giám sát hệ thống, cân bằng tải, giới hạn request, bảo mật WebSocket.</li>
                <li class="list-group-item">Sử dụng gRPC cho giao tiếp giữa các microservices.</li>
                <li class="list-group-item">Ứng dụng kafka cho xử lý sự kiện với kiến trúc EDA.</li>
            </ul>
            </div>
        </div>

        <div class="alert alert-info">
            <h4 class="alert-heading">Kết luận</h4>
            <p>
            Kiến trúc <strong>microservices</strong> giúp hệ thống dễ mở rộng, 
            tăng khả năng chịu lỗi và linh hoạt trong việc tích hợp thêm dịch vụ. 
            Việc áp dụng <em>event-driven</em>, <em>caching</em> và <em>service discovery</em> 
            đảm bảo hiệu suất và khả năng vận hành bền vững.
            </p>
        </div>
        </div>
    `,
    technologies: [
        {
            name: 'Angular',
            svg: '/images/techs/angular.svg',
            description: 'Sử dụng Angular để xây dựng các ứng dụng web động kết hợp với Bootstrap 5',
        },
        {
            name: 'Spring Boot',
            svg: '/images/techs/spring.svg',
            description: 'Sử dụng Spring Boot để xây dựng các dịch vụ backend theo kiến trúc microservices',
        },
        {
            name: 'PostgreSQL',
            svg: '/images/techs/database.svg',
            description: 'Sử dụng PostgreSQL cho quản lý cơ sở dữ liệu quan hệ',
        },
        {
            name: 'Stripe',
            svg: '/images/techs/stripe.svg',
            description: 'Sử dụng Stripe để tích hợp xử lý thanh toán trực tuyến',
        },
        {
            name: 'Kafka & gRPC',
            svg: '/images/techs/kafka.svg',
            description:
                'Sử dụng Kafka cho xử lý sự kiện theo kiến trúc EDA và gRPC cho giao tiếp giữa các microservices',
        },
        {
            name: 'Prometheus & Eureka',
            svg: '/images/techs/prometheus.svg',
            description: 'Sử dụng Prometheus để giám sát hệ thống và Eureka cho service discovery',
        },
        {
            name: 'Redis',
            svg: '/images/techs/redis.svg',
            description: 'Sử dụng Redis để lưu trữ cache và cải thiện hiệu suất hệ thống',
        },
        {
            name: 'Oauth2 Flow',
            svg: '/images/techs/oauth.svg',
            description: 'Sử dụng Oauth2 để xác thực và phân quyền người dùng tập trung, đảm bảo an toàn cho hệ thống',
        },
        {
            name: 'Cloudinary',
            svg: '/images/techs/cloudinary.svg',
            description:
                'Sử dụng Cloudinary để lưu trữ và quản lý hình ảnh, video, hỗ trợ tối ưu hóa và phân phối nội dung.',
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
    description: 'Nền tảng học trực tuyến toàn diện',
    longDescription: `
    <div class="container my-5">
        <header class="mb-4 text-center">
            <h2 class="fw-bold text-success">Hệ thống E-Learning Microservices</h2>
            <p class="lead text-muted">
            Một nền tảng học trực tuyến hiện đại, tập trung vào <span class="fw-semibold">khả năng mở rộng</span>, 
            <span class="fw-semibold">bảo mật</span> và <span class="fw-semibold">trải nghiệm người dùng</span>.
            </p>
        </header>

        <!-- Các tính năng chính -->
        <section class="mb-5">
            <h4 class="mb-3"><span class="badge bg-warning text-dark">🔹 Các tính năng chính</span></h4>
            <div class="accordion" id="featureAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header ps-2">
                    👥 Quản lý người dùng
                </h2>
                <div class="accordion-body">
                    Hỗ trợ nhiều vai trò: giảng viên, sinh viên, quản trị viên; phân quyền linh hoạt.
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header p-2">
                    📅 Lịch học & lớp học trực tuyến
                </h2>
                <div class="accordion-body">
                    Quản lý thời khóa biểu, lớp học realtime, dễ dàng theo dõi tiến trình.
                </div>
            </div>

            <div class="accordion-item p-2">
                <h2 class="accordion-header">
                    📂 Quản lý tài liệu & bài tập
                </h2>
                <div class="accordion-body">
                    Tải lên tài liệu, thông báo, bài tập; hỗ trợ nhiều định dạng.
                </div>
            </div>

            <div class="accordion-item p-2">
                <h2 class="accordion-header">
                    ✅ Nộp bài tập & theo dõi tiến độ
                </h2>
                <div class="accordion-body">
                    Sinh viên có thể nộp bài online, giảng viên theo dõi & chấm điểm trực tiếp.
                </div>
            </div>

            <div class="accordion-item p-2">
                <h2 class="accordion-header">
                    📊 Quản lý thi cử & lớp học
                </h2>
                <div class="accordion-body">
                    Danh sách thi cấm, điểm danh, và theo dõi lớp học đang diễn ra theo thời gian thực.
                </div>
            </div>
            </div>
        </section>

        <!-- Kết luận -->
        <section class="text-center">
            <div class="alert alert-success shadow-sm">
            <h5 class="fw-bold">💡 Kết luận</h5>
            <p>
                Việc kết hợp <strong>microservices</strong> + <strong>giám sát</strong> + <strong>bảo mật hiện đại</strong> 
                tạo nên một hệ thống e-learning mạnh mẽ, dễ mở rộng và dễ bảo trì. 
                Đây là nền tảng tối ưu để triển khai học tập trực tuyến ở quy mô lớn.
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
                'Sử dụng Angular là framework chính để xây dựng giao diện người dùng, kết hợp cùng Bootstrap 5 để tạo trải nghiệm trực quan và thân thiện.',
        },
        {
            name: 'Spring Boot',
            svg: '/images/techs/spring.svg',
            description:
                'Sử dụng Spring Boot để phát triển ứng dụng phía máy chủ, cung cấp API RESTful cho ứng dụng Angular.',
        },
        {
            name: 'PostgreSQL',
            svg: '/images/techs/database.svg',
            description:
                'Sử dụng PostgreSQL làm hệ quản trị cơ sở dữ liệu quan hệ để lưu trữ và quản lý dữ liệu ứng dụng.',
        },
        {
            name: 'MongoDB',
            svg: '/images/techs/mongodb.svg',
            description:
                'Sử dụng MongoDB làm hệ quản trị cơ sở dữ liệu NoSQL để lưu trữ dữ liệu liên quan đến logging và các thao tác của người dùng.',
        },
        {
            name: 'gRPC & Kafka',
            svg: '/images/techs/kafka.svg',
            description:
                'Sử dụng gRPC để giao tiếp hiệu quả giữa các microservices, trong khi Kafka được sử dụng để xử lý các sự kiện bất đồng bộ và truyền thông giữa các dịch vụ.',
        },
        {
            name: 'Prometheus & Eureka',
            svg: '/images/techs/prometheus.svg',
            description:
                'Sử dụng Prometheus để giám sát hiệu suất và sức khỏe của các dịch vụ, trong khi Eureka được sử dụng cho service discovery, giúp các microservices tìm và giao tiếp với nhau một cách linh hoạt.',
        },
        {
            name: 'Oauth2 Flow',
            svg: '/images/techs/oauth.svg',
            description:
                'Sử dụng Oauth2 để xác thực và phân quyền người dùng, đảm bảo an toàn cho các API và dữ liệu nhạy cảm.',
        },
    ],
    thumbnail: '/images/projects/Elearning.png',
    backendGithubUrl: 'https://github.com/username/ecommerce',
    frontendGithubUrl: 'https://github.com/username/ecommerce-frontend',
    youtubeUrl: 'https://youtube.com/watch?v=demo',
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
                <h2 class="fw-bold text-primary">🚀 Booking App - Ứng dụng đặt phòng du lịch</h2>
                <p class="lead text-muted">
                Ứng dụng đặt phòng trực tuyến với <strong>kiến trúc fullstack</strong>, kết hợp 
                <span class="fw-semibold">Spring Boot</span> (REST API) và 
                <span class="fw-semibold">Angular</span> (UI).
                </p>
            </div>

            <!-- Công nghệ -->
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
                🌐 Demo giao diện web
                </div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">✅ Đăng ký, đăng nhập với JWT bảo mật</li>
                    <li class="list-group-item">✅ Tìm kiếm khách sạn / phòng du lịch</li>
                    <li class="list-group-item">✅ Đặt phòng và quản lý lịch sử đặt chỗ</li>
                    <li class="list-group-item">✅ Quản lý chương trình khuyến mãi</li>
                    <li class="list-group-item">✅ Đánh giá khách sạn / phòng du lịch</li>
                    <li class="list-group-item">✅ Xem chi tiết phòng với thông tin & hình ảnh trực quan</li>
                    <li class="list-group-item">✅ Hiệu năng cao nhờ Redis Cache giúp tối ưu tốc độ truy vấn dữ liệu</li>
                </ul>
                </div>
            </div>

            <!-- Kết luận -->
            <div class="alert alert-info shadow-sm">
                <h5 class="fw-bold">💡 Kết luận</h5>
                <p>
                Booking App là một dự án mẫu kết hợp <strong>Spring Boot</strong> và <strong>Angular</strong> 
                trong kiến trúc fullstack. Redis được tích hợp như giải pháp <strong>caching</strong> 
                giúp giảm tải database và cải thiện tốc độ phản hồi, mang đến trải nghiệm tốt hơn cho người dùng.
                </p>
            </div>
        </div>
        `,
    technologies: [
        {
            name: 'Angular',
            svg: '/images/techs/angular.svg',
            description:
                'Sử dụng Angular là framework chính để xây dựng giao diện người dùng, kết hợp cùng Bootstrap 5 để tạo trải nghiệm trực quan và thân thiện.',
        },
        {
            name: 'Spring Boot',
            svg: '/images/techs/spring.svg',
            description:
                'Sử dụng Spring Boot để phát triển ứng dụng phía máy chủ, cung cấp API RESTful cho ứng dụng Angular.',
        },
        {
            name: 'PostgreSQL',
            svg: '/images/techs/postgresql.svg',
            description:
                'Sử dụng PostgreSQL làm hệ quản trị cơ sở dữ liệu quan hệ để lưu trữ và quản lý dữ liệu ứng dụng.',
        },
        {
            name: 'Redis',
            svg: '/images/techs/redis.svg',
            description:
                'Sử dụng Redis làm hệ quản trị cơ sở dữ liệu NoSQL để lưu trữ và quản lý dữ liệu phiên, giúp tăng tốc độ truy xuất dữ liệu.',
        },
        {
            name: 'JWT',
            svg: '/images/techs/jwt.svg',
            description:
                'Sử dụng JWT để xác thực và phân quyền người dùng, đảm bảo an toàn cho các API và dữ liệu nhạy cảm.',
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
                Nền tảng đăng tin <strong>mua bán & cho thuê bất động sản</strong>, được phát triển theo 
                kiến trúc <span class="fw-semibold">microservices</span> hiện đại.
                </p>
            </div>

            <!-- Công nghệ -->
            <section class="mb-5">
                <h4 class="mb-3"><span class="badge bg-info text-dark">🔹 Công nghệ sử dụng</span></h4>
                <div class="row g-3">
                <div class="col-md-3"><div class="p-3 border rounded bg-light shadow-sm">Spring Boot (Java) – Backend</div></div>
                <div class="col-md-3"><div class="p-3 border rounded shadow-sm">Angular – Frontend</div></div>
                <div class="col-md-3"><div class="p-3 border rounded bg-light shadow-sm">OAuth2 – Bảo mật & phân quyền</div></div>
                <div class="col-md-3"><div class="p-3 border rounded shadow-sm">Netflix Eureka – Service Discovery</div></div>
                <div class="col-md-3"><div class="p-3 border rounded shadow-sm">Spring Cloud Gateway – API Gateway</div></div>
                <div class="col-md-3"><div class="p-3 border rounded bg-light shadow-sm">Kafka – Event Streaming</div></div>
                <div class="col-md-3"><div class="p-3 border rounded shadow-sm">Feign Client – Service-to-Service</div></div>
                <div class="col-md-3"><div class="p-3 border rounded bg-light shadow-sm">Redis Caching – Hiệu năng</div></div>
                </div>
            </section>

            <!-- Microservices -->
            <section class="mb-5">
                <h4 class="mb-3"><span class="badge bg-success">⚙️ Các microservices chính</span></h4>
                <div class="row row-cols-1 row-cols-md-2 g-3">
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">Authentication Service</h6>
                        <p>Xác thực & quản lý phiên đăng nhập người dùng qua OAuth2.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">User Service</h6>
                        <p>Quản lý hồ sơ & thông tin người dùng.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">Property Service</h6>
                        <p>Quản lý tin đăng bất động sản (mua, bán, cho thuê).</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">Media Service</h6>
                        <p>Lưu trữ & quản lý hình ảnh, video bất động sản.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">Notification Service</h6>
                        <p>Gửi thông báo qua email, SMS hoặc realtime event.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">Payment Service</h6>
                        <p>Thanh toán trực tuyến qua thẻ để nâng cấp gói tin, đẩy VIP, quảng cáo.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">Caching Layer (Redis)</h6>
                        <p>Lưu cache dữ liệu truy cập thường xuyên (tin nổi bật, danh mục, user info).</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <!-- Luồng hoạt động -->
            <section>
                <h4 class="mb-3"><span class="badge bg-warning text-dark">📊 Luồng hoạt động</span></h4>
                <ol class="list-group list-group-numbered">
                <li class="list-group-item">Người dùng đăng nhập hệ thống</li>
                <li class="list-group-item">Đăng tin bất động sản qua Property Service</li>
                <li class="list-group-item">OAuth2 xác thực & phân quyền</li>
                <li class="list-group-item">Property Service lưu tin và gửi sự kiện qua Kafka</li>
                <li class="list-group-item">Notification Service gửi thông báo (Email / SMS / Realtime)</li>
                <li class="list-group-item">Redis Cache dữ liệu phổ biến để tối ưu hiệu năng</li>
                <li class="list-group-item">Người dùng có thể thanh toán qua Payment Service để nâng cấp tin đăng</li>
                </ol>
            </section>

            <!-- Kết luận -->
            <div class="alert alert-primary mt-5 shadow-sm">
                <h5 class="fw-bold">💡 Kết luận</h5>
                <p>
                <strong>Real Estate Platform</strong> áp dụng kiến trúc <em>microservices</em> với đầy đủ các công nghệ 
                hiện đại (Spring Boot, Angular, Kafka, Redis, OAuth2). Hệ thống không chỉ tối ưu hiệu năng, 
                mà còn dễ mở rộng và duy trì, sẵn sàng cho các nền tảng thương mại bất động sản quy mô lớn.
                </p>
            </div>
        </div>
        `,
    technologies: [
        {
            name: 'Angular',
            svg: '/images/techs/angular.svg',
            description: 'Sử dụng Angular để xây dựng các ứng dụng web động kết hợp với Bootstrap 5',
        },
        {
            name: 'Spring Boot',
            svg: '/images/techs/spring.svg',
            description: 'Sử dụng Spring Boot để phát triển các ứng dụng backend theo kiến trúc microservices',
        },
        {
            name: 'Redis',
            svg: '/images/techs/redis.svg',
            description: 'Sử dụng Redis để lưu trữ cache và cải thiện hiệu suất hệ thống',
        },
        {
            name: 'Stripe',
            svg: '/images/techs/stripe.svg',
            description: 'Sử dụng Stripe để xử lý thanh toán trực tuyến',
        },
        {
            name: 'Kafka',
            svg: '/images/techs/kafka.svg',
            description: 'Sử dụng Kafka để xử lý sự kiện theo kiến trúc EDA và truyền thông giữa các dịch vụ',
        },
        {
            name: 'Oauth2 Flow',
            svg: '/images/techs/oauth.svg',
            description: 'Sử dụng Oauth2 để xác thực và phân quyền người dùng tập trung, đảm bảo an toàn cho hệ thống',
        },
        {
            name: 'Eureka & Actuator',
            svg: '/images/techs/Spring_Cloud.png',
            description:
                'Sử dụng Eureka & Actuator để đăng ký và tìm kiếm dịch vụ tự động, hỗ trợ service discovery trong kiến trúc microservices',
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
    profession: 'Lập trình viên Full-stack',
    bio: 'Tôi có thể đảm nhận cả Frontend và Backend, nhưng thế mạnh nằm ở phát triển hệ thống phía máy chủ với Spring Boot. Tôi tập trung vào việc xây dựng kiến trúc microservices, tối ưu hiệu suất và đảm bảo tính bảo mật cho ứng dụng web.',
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
