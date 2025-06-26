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
      "Software Engineer from Kampala, Uganda. I specialize in developing Data Science and machine learning model, web and mobile application development and maintenance.",
    email: "nsakwa@gmail.com",
  },
  experience: [
    {
      company: "Techworth Group",
      position: "IT & Digital Developer",
      startDate: "Feb 2024",
      endDate: "Present",
      summary: [
        "• Web and software application development: Python, JavaScript & React Native",
        "• Cloud deployment and cyber security",
        "• Machine learning with TensorFlow JS, Data Science & Analytics with Pandas & Matplotlib",
      ],
    },
    {
      company: "Melbet Uganda",
      position: "IT & Digital Consultant",
      startDate: "June 2020",
      endDate: "Feb 2024",
      summary: [
        "•	Systems administration, SEO, Digital Strategy & Data Analysis",
        "•	Software testing for web application, mobile website, Android app and iOS application",
        "•	Graphics design with Adobe Photoshop, Illustrator & Premiere Pro",
      ],
    },
    {
      company: "AHA-African Humanitarian Action",
      position: "IT Developer",
      startDate: "Jan 2020",
      endDate: "June 2020",
      summary:[
        "•	Developed Medical Referral application-PHP Codeigniter for web application",
        "•	Native Android app version- Java",
      ],
    },
    {
      company: "Techworth Group",
      position: "Software Developer",
      startDate: "Jan 2017",
      endDate: "Jan 2020",
      summary: [
        "• Web app development- PHP Laravel, Vue & React JS, Python Flask & Django",
        "• Mobile app development- React Native JavaScript, Flutter framework with Dart.",
      ],
    },
  ],
  projects: [
    {
      name: "Medical Information system",
      summary: "A medical referral application for AHA action for refugess",
      linkPreview: "/",
      linkSource: "https://www.hackster.io/nsakwa/medical-referral-system-for-contact-tracing-a9926e",
      image: "/mis-blood-test.avif",
    },
    {
      name: "2025 unemployment prediction model",
      summary: "A Data Science and Machine learning model",
      linkPreview: "/",
      linkSource: "https://github.com/nicksakwa/data-Science-and-machine-learning-model-unemployement",
      image: "/2025-unemployement-predictions-ug.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Nick Sakwa, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in backend and frontend development, as well as mobile android and iOS technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/profilepic.jpg",
  },
};

// #5755ff
