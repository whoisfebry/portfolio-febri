type Project = {
    title: {
        id: string;
        en: string;
    };
    category: "data-analyst" | "programmer" | "uiux";
    images: string[];
    description: {
        id: string;
        en: string;
    };
    technologies: string[];
};

const projects: Project[] = [
    {
        title: {
            id: "Penjualan Motor Honda",
            en: "Honda Motorcycle Sales",
        },
        category: "data-analyst",
        images: ["images/projects/dashboard honda 2024.webp"],
        description: {
            id: "Dashboard interaktif berbasis data penjualan motor Honda untuk memantau revenue, profit, metode pembayaran, leasing, dan performa penjualan tiap seri melalui visualisasi grafik dan tabel secara real-time.",
            en: "Interactive dashboard based on Honda motorcycle sales data to monitor revenue, profit, payment methods, leasing performance, and sales performance of each motorcycle series through real-time charts and tables.",
        },
        technologies: [
            "Power BI",
            "Microsoft Excel",
        ],
    },
    {
        title: {
            id: "Sales Dashboard Tableau",
            en: "Sales Dashboard Tableau",
        },
        category: "data-analyst",
        images: ["images/projects/tableau datascience.webp"],
        description: {
            id: "Dashboard Tableau interaktif untuk menganalisis performa penjualan berdasarkan region, sub category, profit, dan monthly sales guna mendukung analisis bisnis dan pengambilan keputusan.",
            en: "Interactive Tableau dashboard for analyzing sales performance by region, sub-category, profit, and monthly sales to support business analysis and decision-making.",
        },
        technologies: [
            "Tableau",
            "Microsoft Excel",
        ],
    },
    {
        title: {
            id: "Sales and Profit Dashboard",
            en: "Sales and Profit Dashboard",
        },
        category: "data-analyst",
        images: ["images/projects/dashboard excel.webp"],
        description: {
            id: "Dashboard interaktif untuk analisis sales dan profit berdasarkan customer segment, regional manager, sub category, serta tren bulanan.",
            en: "Interactive dashboard for analyzing sales and profit by customer segment, regional manager, sub-category, and monthly trends.",
        },
        technologies: [
            "Microsoft Excel",
        ],
    },
    {
        title: {
            id: "Customer Shopping",
            en: "Customer Shopping Dashboard",
        },
        category: "data-analyst",
        images: ["images/projects/customer shopping dashboard.webp"],
        description: {
            id: "Dashboard interaktif untuk analisis customer shopping, mencakup revenue, net revenue, profit, kategori produk, metode pembayaran, dan tren profit.",
            en: "Interactive dashboard for customer shopping analysis, including revenue, net revenue, profit, product categories, payment methods, and profit trends.",
        },
        technologies: [
            "Power BI",
            "Microsoft Excel",
        ],
    },
    {
        title: {
            id: "Science Sales Analysis",
            en: "Science Sales Analysis",
        },
        category: "data-analyst",
        images: ["images/projects/dashboard datascience.webp"],
        description: {
            id: "Dashboard interaktif untuk analisis penjualan global berdasarkan negara, produk, customer, seller, metode pembayaran, dan tren sales.",
            en: "Interactive dashboard for global sales analysis based on countries, products, customers, sellers, payment methods, and sales trends.",
        },
        technologies: [
            "Power BI",
            "Microsoft Excel",
        ],
    },
    {
        title: {
            id: "Produk Elektronik",
            en: "Electronic Products",
        },
        category: "data-analyst",
        images: ["images/projects/dashboard bnsp.webp"],
        description: {
            id: "Dashboard interaktif untuk analisis penjualan produk elektronik berdasarkan produk, wilayah, dan tren penjualan.",
            en: "Interactive dashboard for analyzing electronic product sales by product, region, and sales trends.",
        },
        technologies: [
            "Power BI",
            "Microsoft Excel",
        ],
    },
    {
        title: {
            id: "Website ALA Bakery",
            en: "ALA Bakery Website",
        },
        category: "programmer",
        images: [
            "images/projects/alabakery/bakery1.webp",
            "images/projects/alabakery/bakery2.webp",
            "images/projects/alabakery/bakery3.webp",
            "images/projects/alabakery/bakery4.webp",
            "images/projects/alabakery/bakery5.webp",
        ],
        description: {
            id: "Website bakery berbasis PHP dengan landing page modern, halaman produk, informasi toko, akun pengguna, dan desain responsif.",
            en: "PHP-based bakery website featuring a modern landing page, product catalog, store information, user accounts, and a responsive design.",
        },
        technologies: [
            "PHP",
            "MySQL",
            "Bootstrap",
        ],
    },
    {
        title: {
            id: "Website ChickenShop",
            en: "ChickenShop Website",
        },
        category: "programmer",
        images: [
            "images/projects/chickenshop/chickenshop1.webp",
            "images/projects/chickenshop/chickenshop2.webp",
            "images/projects/chickenshop/chickenshop3.webp",
            "images/projects/chickenshop/chickenshop4.webp",
            "images/projects/chickenshop/chickenshop5.webp",
        ],
        description: {
            id: "Website e-commerce berbasis PHP untuk penjualan ayam potong dengan katalog produk, autentikasi pengguna, informasi toko, dan desain responsif.",
            en: "PHP-based e-commerce website for selling fresh chicken with product catalog, user authentication, store information, and responsive design.",
        },
        technologies: [
            "PHP",
            "MySQL",
            "Bootstrap",
        ],
    },
    {
        title: {
            id: "Website Portal Berita",
            en: "News Portal Website",
        },
        category: "programmer",
        images: [
            "images/projects/beritalsp/beritalsp1.webp",
            "images/projects/beritalsp/beritalsp2.webp",
            "images/projects/beritalsp/beritalsp3.webp",
            "images/projects/beritalsp/beritalsp4.webp",
            "images/projects/beritalsp/beritalsp5.webp",
        ],
        description: {
            id: "Website portal berita berbasis CodeIgniter dengan manajemen berita, kategori, pengguna, dashboard admin, dan navigasi yang mudah digunakan.",
            en: "CodeIgniter-based news portal website with news management, categories, user management, admin dashboard, and user-friendly navigation.",
        },
        technologies: [
            "PHP",
            "MySQL",
            "Bootstrap",
        ],
    },
    {
        title: {
            id: "Mobile Flutter TokoKita",
            en: "Mobile Flutter TokoKita",
        },
        category: "programmer",
        images: [
            "images/projects/tokokita/tokokita1.webp",
            "images/projects/tokokita/tokokita2.webp",
            "images/projects/tokokita/tokokita3.webp",
            "images/projects/tokokita/tokokita4.webp",
            "images/projects/tokokita/tokokita5.webp",
        ],
        description: {
            id: "Aplikasi mobile e-commerce berbasis Flutter dengan fitur autentikasi pengguna, katalog produk, keranjang belanja, profil pengguna, serta integrasi API menggunakan MySQL dan Postman.",
            en: "Flutter-based mobile e-commerce application featuring user authentication, product catalog, shopping cart, user profile, and API integration with MySQL and Postman.",
        },
        technologies: [
            "Flutter",
            "MySQL",
            "Postman",
        ],
    },
    {
        title: {
            id: "Website TodoApp",
            en: "Website TodoApp",
        },
        category: "programmer",
        images: [
            "images/projects/todoapp/todo1.png",
            "images/projects/todoapp/todo2.png",
            "images/projects/todoapp/todo3.png",
        ],
        description: {
            id: "Website manajemen tugas berbasis Next.js dengan fitur autentikasi pengguna, pengelolaan tugas, filter status, dashboard ringkasan, dan antarmuka modern yang responsif.",
            en: "Next.js-based task management website featuring user authentication, task management, status filtering, dashboard summary, and a modern responsive interface.",
        },
        technologies: [
            "Next.js",
        ],
    },
    {
        title: {
            id: "Mobile Flutter MedQuick",
            en: "Mobile Flutter MedQuick",
        },
        category: "data-analyst",
        images: [
            "images/projects/medquick/MedQuick1.webp",
            "images/projects/medquick/MedQuick2.webp",
            "images/projects/medquick/MedQuick3.webp",
            "images/projects/medquick/MedQuick4.webp",
            "images/projects/medquick/MedQuick5.webp",
        ],
        description: {
            id: "Aplikasi mobile layanan kesehatan berbasis Flutter yang menyediakan fitur pendaftaran pasien, konsultasi dokter, riwayat pemeriksaan, profil pengguna, serta integrasi API menggunakan MySQL dan Postman.",
            en: "Flutter-based healthcare mobile application featuring patient registration, doctor consultation, medical history, user profile, and API integration with MySQL and Postman.",
        },
        technologies: [
            "Flutter",
            "MySQL",
            "Postman",
        ],
    },
    {
        title: {
            id: "Genone Landing Page",
            en: "Genone Landing Page",
        },
        category: "uiux",
        images: [
            "images/projects/genone/genone1.webp",
            "images/projects/genone/genone2.webp",
            "images/projects/genone/genone3.webp",
            "images/projects/genone/genone4.webp",
            "images/projects/genone/genone5.webp",
            "images/projects/genone/genone6.webp",
            "images/projects/genone/genone7.webp",
        ],
        description: {
            id: "Desain UI/UX mobile landing page di Figma untuk kampanye Honda PCX dengan informasi produk, promo, formulir, FAQ, dan lokasi dealer.",
            en: "Mobile landing page UI/UX design in Figma for the Honda PCX campaign, featuring product information, promotions, forms, FAQs, and dealer locations.",
        },
        technologies: [
            "Figma",
        ],
    },
    {
        title: {
            id: "Futsal Booking App",
            en: "Futsal Booking App",
        },
        category: "uiux",
        images: [
            "images/projects/futsal/futsal1.webp",
            "images/projects/futsal/futsal2.webp",
            "images/projects/futsal/futsal3.webp",
            "images/projects/futsal/futsal4.webp",
            "images/projects/futsal/futsal5.webp",
            "images/projects/futsal/futsal6.webp",
        ],
        description: {
            id: "Desain UI/UX mobile di Figma untuk aplikasi booking lapangan futsal dengan fitur reservasi, promo, event, profil pengguna, dan navigasi intuitif.",
            en: "Mobile UI/UX design in Figma for a futsal court booking application with reservation, promotions, events, user profile, and intuitive navigation.",
        },
        technologies: [
            "Figma",
        ],
    },
    {
        title: {
            id: "DIGISALE Authentication UI",
            en: "DIGISALE Authentication UI",
        },
        category: "uiux",
        images: [
            "images/projects/loginUI/login1.webp",
            "images/projects/loginUI/login2.webp",
            "images/projects/loginUI/login3.webp",
        ],
        description: {
            id: "Desain UI/UX di Figma untuk alur autentikasi aplikasi DIGISALE dengan welcome screen, login, registrasi, dan social sign-in.",
            en: "UI/UX design in Figma for the DIGISALE application authentication flow, including welcome screen, login, registration, and social sign-in.",
        },
        technologies: [
            "Figma",
        ],
    },
];

export default projects;