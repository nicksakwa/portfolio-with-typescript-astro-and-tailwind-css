import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Nick Sakwa — Software Developer",
  author: "Nick Sakwa",
  description:
    "Software Engineer & IT Consultant, delivering secure optimized digital solutions via Artificial intelligence, web, mobile , cloud & data environments",
  lang: "en",
  siteLogo: "/profilepic.jpg",
  navLinks: [
    { text: "Experience", href: "/#experience" },
    { text: "Projects", href: "/#projects" },
    { text: "Publications", href: "/publications" },
    { text: "YouTube", href: "/youtube" },
    { text: "About", href: "/#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/nickspartan01" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/nick-sakwa-303a98146/" },
    { text: "Github", href: "https://github.com/nicksakwa" },
    { text: "Medium", href: "https://medium.com/@nicksakwa" },
    { text: "Facebook", href: "https://www.facebook.com/nick.sakwa" },
  ],
  socialImage: "/profilepic.jpg",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Nick Sakwa ",
    specialty: "Full Stack Developer",
    summary:
      "I am a full-stack developer from Kampala, Uganda with 9 years of experience delivering secure optimized solutions via Artificial Intelligence, web, mobile apps, cloud & data environments.",
    email: "nsakwa@gmail.com",
  },
  experience: [
    {
      company: "Techno Brain Group",
      position: "Software Engineer",
      startDate: "Feb 2026",
      endDate: "Present",
      summary: [
        "Web & app development: Frontend & backend",
        "DevOps management with CI & CD pipelines",
        "ERP & CRM solutions for Governments & international organizations",
      ],
    },
     {
      company: "Qriscorp (U) Limited",
      position: "Full Stack Developer",
      startDate: "July 2025",
      endDate: "Feb 2026",
      summary: [
        "Web & app development: Frontend & backend",
        "DevOps management with Cloud, Linux and scaling solutions",
        "Fintech solutions integration with Mobile Money and Visa/Mastercard APIs",
      ],
    },
  ],
  projects: [
    {
      name: "ChatPay AI powered chatbot for payments",
      shortName: "ChatPay",
      summary: "Whatsapp AI powered chatbot for payments and customer support",
      linkPreview: "https://chatpay.qriscorp.com/",
      linkSource: "https://wa.me/15558130850",
      image: "/chatpay.png",
    },
    {
      name: "Yassako electricity credit application",
      shortName: "Yassako",
      summary: "API development, web and mobile app for electricity credit purchase available on Android and iOS platforms",
      linkPreview: "https://yassako.net/",
      linkSource: "https://yassako.net/",
      image: "/yassako.png",
    },
    {
      name: "Azawadi",
      shortName: "Azawadi",
      summary: "E commerce gifting web application to cherish the moment with your loved ones",
      linkPreview: "https://azawadi.com/",
      linkSource: "https://azawadi.com/",
      image: "/azawadi.png",
    },
    {
      name: "Limbo pay reliable payment platform",
      shortName: "LimboPay",
      summary: "API development, web and mobile app for freelance payments available on Android and iOS platforms",
      linkPreview: "https://limbopay.com/",
      linkSource: "https://limbopay.com/",
      image: "/limbopay.png",
    },
    {
      name: "Lyxa events application",
      shortName: "LyxaEvents",
      summary: "API development, web and mobile app for ticket purchase and verification available on Android and iOS platforms",
      linkPreview: "http://lyxaevents.com/",
      linkSource: "http://lyxaevents.com/",
      image: "/lyxa.png",
    },
    {
      name: "Digital Proximity",
      shortName: "DigitalProximity",
      summary: "I founded digital proximity to teach programming and software development after work hours for free on social media to students and professionals all around the world",
      linkPreview: "https://www.youtube.com/@DigitalProximity01",
      linkSource: "https://www.youtube.com/@DigitalProximity01",
      image: "/digital.png",
    },
  ],
  publications: [
    {
      title: "Understanding the React JavaScript Library",
      summary: "React is a JavaScript library that was developed by Facebook engineers to help them manage front-end aspects of the application.",
      date: "Sep 28, 2025",
      link: "https://medium.com/@nicksakwa/understanding-the-react-javascript-library-b5a51e531ef1",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZmTPndsRwuec0S6-814RYQ.png",
    },
    {
      title: "Programming languages you should know about in 2026?",
      summary: "It's 2026, and as a developer or someone new to programming, you should educate yourself which programming language to learn.",
      date: "Jan 8, 2026",
      link: "https://medium.com/@nicksakwa/programming-languages-you-should-know-about-in-2026-c149fe6c895d",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Yx3wrC89olpWXePW5Sa-Hw.png",
    },
    {
      title: "Tech Career Paths Every Developer Should Know About in 2026",
      summary: "2026 is around the corner, and a lot of students, junior developers, mid-level, and senior developers out there are wondering what skills they should focus on.",
      date: "Dec 23, 2025",
      link: "https://medium.com/@nicksakwa/tech-career-paths-every-developer-should-know-about-in-2026",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*UKdQQNg80bJGT2XkYQ8uGQ.png",
    },
    {
      title: "Data Ingestion and Web Scraping with the Python Programming Language",
      summary: "Ever wondered how ChatGPT collects data from the internet in order to provide answers for its users?",
      date: "Sep 20, 2025",
      link: "https://medium.com/@nicksakwa/data-ingestion-and-web-scraping-with-the-python-programming-language",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*3LS-42Sqwt6VlmajMARdVA.png",
    },
    {
      title: "Data analysis for Excel with Openpyxl Python Library",
      summary: "Is your business or organization that you work for grappling with a lot of high-volume Excel sheets that you can't summarize or develop insights from?",
      date: "Aug 8, 2025",
      link: "https://medium.com/@nicksakwa/data-analysis-for-excel-with-openpyxl-python-library",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*4OvIZQ8EcXHv4Y3Bud0DNQ.png",
    },
    {
      title: "The AI Revolution: Pro Human Skills Vs Super Artificial Intelligence",
      summary: "OpenAI & Google are developing super-AI that can surpass human Intelligence. Humans invented Computers, but will the computers replace humans?",
      date: "Jun 14, 2025",
      link: "https://medium.com/@nicksakwa/the-ai-revolution-pro-human-skills-vs-super-artificial-intelligence",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*vhDw99FZlDz5iJi69dq3ag.png",
    },
    {
      title: "How Data Science can be used to develop Key Performance Indicators for your project?",
      summary: "Are you a business owner or Project manager struggling to assign KPIs to your tech team? I got you covered.",
      date: "Jun 10, 2025",
      link: "https://medium.com/@nicksakwa/how-data-science-can-be-used-to-develop-key-performance-indicators-for-your-project",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*KbXjNoUqrWIRZRA2HijGJg.png",
    },
    {
      title: "Data Science with the Python Programming Language",
      summary: "Are you still not sure about Data Science, or want to learn more about it in your programming journey?",
      date: "May 28, 2025",
      link: "https://medium.com/@nicksakwa/data-science-with-the-python-programming-language",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*eemTdeOylAYS4DkkW851cg.png",
    },
  ],
  youtube: [
     {
      title: "React Fundamentals",
      description: "Learn React fundamentals including file structure, social media app UI, and codebase development. Perfect for beginners starting with React.",
      playlistId: "PLKVQKxiHjrUWqBRmO-Q4j2k1E3ytIxfMz",
      videoCount: 4,
    },
    {
      title: "Data Analytics",
      description: "Advanced data analytics tutorials covering real-world scenarios, KPI development, and insights generation from complex datasets.",
      playlistId: "PLKVQKxiHjrUV1DcRLOxJa-WPNw7QOfcGa",
      videoCount: 8,
    },
    {
      title: "Data Science with Python",
      description: "Master data science concepts using Python programming language. Learn data ingestion, web scraping, and analysis techniques.",
      playlistId: "PLKVQKxiHjrUXUOs7lHzkgN2gHNxzaoEHz",
      videoCount: 4,
    },
    {
      title: "Front End Development",
      description: "Complete front-end development tutorials covering modern frameworks and best practices for building interactive user interfaces.",
      playlistId: "PLKVQKxiHjrUXUW8wVIEdte0RW2OmwpvvW",
      videoCount: 4,
    },
  ],
  about: {
    description: `
       I am a Software Engineer with strong fundamentals in backend and front end development, as well as AI engineering & Data Science. I focus on performance, security  and scalability.
    `,
    image: "/profilepic.jpg",
  },
};


