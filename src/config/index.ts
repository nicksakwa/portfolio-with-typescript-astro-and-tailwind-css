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
    specialty: "Full Stack Developer",
    summary:
      "I am a full-stack developer from Kampala, Uganda with 9 years of experience delivering secure optimized solutions via web, mobile apps, cloud & data environments.",
    email: "nsakwa@gmail.com",
  },
  experience: [
    {
      company: "Techno Brain Group",
      position: "Full Stack Developer",
      startDate: "Feb 2026",
      endDate: "Present",
      summary: [
        "Web & app development: Front-end & backend",
        "DevOps management with CI & CD pipelines",
        "ERP & CRM solutions for Bigtech clients & international organizations",
      ],
    },
     {
      company: "Qriscorp (U) Limited",
      position: "Full Stack Developer",
      startDate: "July 2025",
      endDate: "Feb 2026",
      summary: [
        "Web & app development: Front-end & backend",
        "DeVOps management with Cloud, Linux and scaling solutions",
        "Fintech solutions integration with Mobile Money and Visa/Mastercard APIs",
      ],
    },
  ],
  projects: [
    {
      name: "ChatPay AI powered chatbot for payments",
      summary: "Whatsapp AI powered chatbot for payments and customer support",
      linkPreview: "https://chatpay.qriscorp.com/",
      linkSource: "https://wa.me/15558130850",
      image: "/chatpay.png",
    },
    {
      name: "Yassako electricity credit application",
      summary: "API development, web and mobile app for electricity credit purchase available on Android and iOS platforms",
      linkPreview: "https://yassako.net/",
      linkSource: "https://yassako.net/",
      image: "/yassako.png",
    },
    {
      name: "Azawadi",
      summary: "E commerce gifting web application to cherish the moment with your loved ones",
      linkPreview: "https://azawadi.com/",
      linkSource: "https://azawadi.com/",
      image: "/azawadi.png",
    },
    {
      name: "Limbo pay reliable payment platform",
      summary: "API development, web and mobile app for freelance payments available on Android and iOS platforms",
      linkPreview: "https://limbopay.com/",
      linkSource: "https://limbopay.com/",
      image: "/limbopay.png",
    },
    {
      name: "Lyxa events application",
      summary: "API development, web and mobile app for ticket purchase and verification available on Android and iOS platforms",
      linkPreview: "http://lyxaevents.com/",
      linkSource: "http://lyxaevents.com/",
      image: "/lyxa.png",
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


