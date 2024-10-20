/*=============================================================
    meta data object customization
===============================================================*/

import {
  CodeIcon,
  DebugIcon,
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
  MediumIcon,
  PerformanceIcon,
  Responsive,
  UiIcon,
  WebsiteIcon
} from "@/utils/icons";
import { ReactNode } from "react";

type metaData = {
  title: string;
  description: string;
  keywords: string;
};

export const metaData: metaData = {
  title: "Md Kayesh | Front End Developer",
  description: `Hi, I'm Md Kayesh. I'm a front end developer and Freelancer. I love to create fully functional beautiful and attractive looking websites with cool animations and designs with the latest technologies like Reactjs, Nextjs, Tailwind, Framer-motion, GSAP, Bootstrap, Redux, Redux-toolkit, Javascript, CSS3, HTML5, etc. I have been working in this field since 2021. In these years I have developed 50+ websites. I love to work with new people and create websites for them. In work, my major priority is the client's requirements and their satisfaction. So, If you want to design or build a website and work with me, feel free to contact with me.`,
  keywords: `Md Kayesh, Front End Developer, Freelancer, html, css, javascript, reactjs, nextjs, tailwindcss, framer-motion, gsap, bootstrap, redux, redux-toolkit, typescript, nodejs, up work, fiver, freeelancer.com, expert web developer`,
};

/*=============================================================
    navlinks
===============================================================*/

export type navLinksType = {
  title: string;
  url: string;
};

export const navlinks: navLinksType[] = [
  {
    title: "Home",
    url: "#home",
  },
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Blogs",
    url: "https://mdkayeshblog.vercel.app/",
  },
  {
    title: "Projects",
    url: "#projects",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

export const socialIcons = [
  {
    title: "GitHub",
    icon: <GitHub />,
    url: "https://github.com/mdkayesh/",
  },
  {
    title: "Linkedin",
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/md-kayesh",
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    url: "https://instagram.com/md.kayesh777/",
  },
  {
    title: "Facebook",
    icon: <Facebook />,
    url: "https://www.facebook.com/kayeskhanakash",
  },
  {
    title: "Medium",
    icon: <MediumIcon />,
    url: "https://medium.com/@mdkayesh777",
  },
];

type serviceItemType = {
  title: string;
  icon: ReactNode;
  text: string;
};

/*=============================================================
    Services section
===============================================================*/

export const serviceItems: serviceItemType[] = [
  {
    title: "Front-End-Development",
    icon: <CodeIcon className="text-text_color" />,
    text: `I translate design concepts into functional web interfaces by writing clean and efficient code. This includes using HTML to structure the content, CSS for styling, and JavaScript for interactivity and dynamic behavior.`,
  },
  {
    title: "Performance Optimization",
    icon: <PerformanceIcon />,
    text: `I optimize the front-end code, images, to enhance the website's loading speed and overall performance. This involves techniques such as minification, caching, lazy loading, and optimizing image sizes.`,
  },
  {
    title: "Testing and Debugging",
    icon: <DebugIcon />,
    text: `I perform testing and debugging to identify and resolve any issues or bugs related to the front-end functionality or user experience. This ensures a smooth and error-free experience for users.`,
  },
  {
    title: "UI/UX Design",
    icon: <UiIcon />,
    text: `Proficient in translating user needs into engaging interfaces through wireframing, prototyping, and collaboration with cross-functional teams. Experienced in user research methodologies to inform design decisions and enhance overall usability.`,
  },
  {
    title: "Web Design",
    icon: <WebsiteIcon />,
    text: `I create visually appealing and user-friendly website designs using HTML5, CSS3, JavaScript, reactjs and latest technologies. This involves considering factors like layout, color schemes, typography, and responsive design to ensure compatibility across different devices and screen sizes.`,
  },
  {
    title: "Responsive Design",
    icon: <Responsive />,
    text: `I ensure that websites or applications adapt and respond effectively to different devices and screen sizes, providing an optimal user experience across desktops, laptops, tablets, and mobile devices.`,
  },
];
