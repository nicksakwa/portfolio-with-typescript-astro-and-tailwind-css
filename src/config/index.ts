import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Nick Sakwa — Software Developer",
  author: "Nick Sakwa",
  description:
    "Software Engineer from Kampala, Uganda. I specialize in developing Data Science and machine learning model, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/profilepic.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
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
    specialty: "Software Developer",
    summary:
      "Software Engineer from Kampala, Uganda. Develop Data Science and machine learning model, web and mobile apps with cloud maintenance & cyber security experience.",
    email: "nsakwa@gmail.com",
  },
  experience: [
    {
      company: "Techworth Group",
      position: "IT & Digital Developer",
      startDate: "Feb 2024",
      endDate: "Present",
      summary: [
        "• Web & app development: Python, PHP, Dart, JavaScript",
        "• Cloud, kubernetes & cyber security",
        "• Machine learning, Data Science & Analytics",
      ],
    },
    {
      company: "Melbet Uganda",
      position: "IT & Digital Consultant",
      startDate: "June 2020",
      endDate: "Feb 2024",
      summary: [
        "•	Systems admin, SEO & Data Analysis",
        "•	Software unit testing",
        "•	Graphics design with Adobe Photoshop, Illustrator & Premiere Pro",
      ],
    },
    {
      company: "AHA-African Humanitarian Action",
      position: "IT Developer",
      startDate: "Jan 2020",
      endDate: "June 2020",
      summary:[
        "•	Developed Medical Referral system-PHP for web app",
        "•	Native Android app version- Java",
      ],
    },
  ],
  projects: [
    {
      name: "BlogWind",
      summary: "Tailwind Typescript Blog with NextJS",
      linkPreview: "https://blogwind.vercel.app/",
      linkSource: "https://github.com/nicksakwa/nextjs-tailwind-css-blog",
      image: "/blogwind.jpg",
    },
    {
      name: "Medical Information system",
      summary: "A medical referral application for AHA action for refugess",
      linkPreview: "https://www.hackster.io/nsakwa/medical-referral-system-for-contact-tracing-a9926e",
      linkSource: "https://www.hackster.io/nsakwa/medical-referral-system-for-contact-tracing-a9926e",
      image: "/mis-blood-test.avif",
    },
    {
      name: "2025 unemployment prediction model",
      summary: "A Data Science and Machine learning model",
      linkPreview: "/",
      linkSource: "https://github.com/nicksakwa/data-Science-and-machine-learning-model-unemployement",
      image: "/unemployment-predictions.jpg",
    },
    {
      name: "health recomendations smart watch data",
      summary: "a Data science and machine learning model for linear regression with calorie burnage prediction vs average pulse",
      linkPreview: "https://medium.com/@nicksakwa/data-science-with-the-python-programming-language-39e8e4b08e5b",
      linkSource: "https://github.com/nicksakwa/DataScience-and-Machine-learning-algorithms-linear-regression",
      image: "/linearregressioncalorieburnagevsaveragepulse.webp",
    },
  ],
  about: {
    description: `
       I’m a Mobile and Web Developer with a strong background in backend and frontend development, as well as data science and machine learning technologies.
       I focus on performance, security, and scalability.
    `,
    image: "/profilepic.jpg",
  },
};


