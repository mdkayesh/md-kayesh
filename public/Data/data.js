import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandFramerMotion, TbBrandRedux } from "react-icons/tb";

//website images

import furns from "../furns.png";
import zoom from "../zoom2.png";
import portfolio from "../portfolio.png";
import spotify from "../spotify.png";
import howard from "../howard.png";
import herobiz from "../herobiz.png";
import nody from "../nody2.png";

// services

import design from "../design.png";
import development from "../development.png";
import collaborate from "../collaborate.png";
import loop from "../loop.png";
import responsive from "../responsive.png";
import browser from "../browser.png";
import debug from "../debug.png";
import interfaces from "../interface.png";
import performance from "../performance.png";

// clients images

// import client1 from "../client.webp";
// import client2 from "../client2.webp";
// import client3 from "../client3.webp";
// import client4 from "../client4.webp";

// navigation

const navData = [
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Skills",
    url: "#skills",
  },
  {
    title: "Projects",
    url: "#projects",
  },
  // {
  //   title: "Testimonial",
  //   url: "#testimonial",
  // },
];

// skills

const skills = [
  {
    title: "React",
    bigBubble: true,
    icon: <FaReact />,
    top: "-60px",
    left: "500px",
    lavel: "85%",
    experience: "80%",
  },
  {
    title: "Javascript",
    icon: <IoLogoJavascript />,
    bigBubble: true,
    top: "-40px",
    left: "200px",
    lavel: "85%",
    experience: "80%",
  },
  {
    title: "Css3",
    icon: <IoLogoCss3 />,
    bigBubble: true,
    top: "100px",
    left: "50px",
    lavel: "95%",
    experience: "95%",
  },

  {
    title: "Html5",
    icon: <AiOutlineHtml5 />,
    top: "40px",
    left: "90px",
    lavel: "95%",
    experience: "95%",
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss />,
    top: "100px",
    left: "-300px",
    lavel: "90%",
    experience: "80%",
  },
  {
    title: "Bootstrap",
    icon: <BsBootstrap />,
    top: "120px",
    left: "-20px",
    lavel: "70%",
    experience: "60%",
  },
  {
    title: "Framer Motion",
    icon: <TbBrandFramerMotion />,
    left: "-520px",
    top: "-30px",
    mediumBubble: true,
    lavel: "75%",
    experience: "65%",
  },
  {
    title: "Redux",
    icon: <TbBrandRedux />,
    left: "-100px",
    top: "80px",
    mediumBubble: true,
    lavel: "75%",
    experience: "65%",
  },
  {
    title: "Nextjs",
    icon: <SiNextdotjs />,
    bigBubble: true,
    top: "-30px",
    left: "-120px",
    lavel: "60%",
    experience: "55%",
  },
];

// porjects

const projects = [
  {
    title: "Furns-eCommerce-app",
    url: "https://furns-app.netlify.app",
    img: furns,
    description: `The Modern Home Furniture website is a fully functional and visually appealing online store that has been developed using ReactJS, JavaScript, HTML5, and CSS3. This project aims to provide users with a seamless and engaging experience for browsing and purchasing furniture items from the comfort of their homes.`,
    technologies: "Reactjs, Javascript, CSS3, SCSS, Framer-motion, Firebase",
    gitUrl: "https://github.com/KayesKhanAkash/furns-app",
    featured: true,
  },

  {
    title: "Zoom-eCommerce-app",
    url: "https://zoom-ecommerce-clone-app.netlify.app",
    img: zoom,
    description: `Presenting an exceptional e-commerce website, designed with cutting-edge technologies. Created using React, Javascript and Tailwind, this site embodies a seamless user experience, allowing clients to explore products effortlessly for responsive design.`,
    technologies:
      "Reactjs, Javascript, CSS3, Tailwind css, Framer-motion, Firebase",
    gitUrl: "https://github.com/KayesKhanAkash/zoomCloneApp",
    featured: true,
  },
  {
    title: "React-portfolio-app",
    url: "https://react-portfolio-clone-by-md-kayesh.netlify.app",
    img: portfolio,
    description: `This sleek and modern site, designed with precision using the latest web technologies, including HTML, CSS, JavaScript and Reactjs offers a seamless user experience. With its responsive layout, the website adapts effortlessly to any screen size, ensuring accessibility across devices.`,
    technologies:
      "Reactjs, Javascript, CSS3, Tailwind css, Firebase, Framer-motion",
    gitUrl: "https://github.com/KayesKhanAkash/portfolio-one-app/tree/master",
    featured: true,
  },
  {
    title: "Spotify-clone-app",
    url: "https://spotify-clone-app2-0.netlify.app",
    img: spotify,
    description: `A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.`,
    technologies:
      "Reactjs, Javascript, CSS3, Spotify API, Tailwind css, Framer-motion",
    gitUrl:
      "https://github.com/KayesKhanAkash/spotify2.0-clone-app/tree/master",
  },
  {
    title: "Howard-app",
    url: "https://howard-app.netlify.app",
    img: howard,
    description: `The Howard Cryptocurrency App Template is a cutting-edge web application template developed using ReactJS, HTML5, and CSS3. It offers a sleek and intuitive design, incorporating stunning animations powered by Framer Motion, and ensuring full responsiveness across various devices and screen sizes.`,
    technologies: "Reactjs, Javascript, CSS3, Framer-motion",
    gitUrl: "https://github.com/KayesKhanAkash/howard-app",
  },

  {
    title: "Nody-react-app",
    img: nody,
    url: "https://nody-react.netlify.app/",
    description: `The Product Marketing Management tamplate is a single-page application designed to streamline and optimize the process of managing and marketing products. Built using modern web technologies, including ReactJS, HTML5, CSS3, and JavaScript, this application offers a comprehensive set of tools and features for effective product marketing.`,
    technologies: "Reactjs, framer-motion, Javascript, CSS3, HTML5",
    gitUrl: "https://github.com/KayesKhanAkash/nody-app",
  },
  {
    title: "Herobiz-app",
    img: herobiz,
    url: "https://herobiz-clone.netlify.app",
    description:
      "This is a simple landing page tamplate fully responsive built with vanila javascript, CSS3, and HTML5",
    technologies: "Javascript, CSS3, HTML5",
    gitUrl: "https://github.com/KayesKhanAkash/landingPage",
  },
];

// social links

const socialMedias = [
  {
    title: "facebook",
    url: "https://www.facebook.com/profile.php?id=100006304188828",
    icon: <FaFacebookF />,
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/md-kayesh-37b0a1276",
    icon: <FaLinkedinIn />,
  },
  {
    title: "GitHub",
    url: "https://github.com/KayesKhanAkash",
    icon: <FaGithub />,
  },
];

// services

const services = [
  {
    title: "Website Design",
    text: `I create visually appealing and user-friendly website designs using HTML5, CSS3, JavaScript, reactjs and latest technologies. This involves considering factors like layout, color schemes, typography, and responsive design to ensure compatibility across different devices and screen sizes.`,
    icon: design,
  },
  {
    title: "Front-End Development",
    text: `I translate design concepts into functional web interfaces by writing clean and efficient code. This includes using HTML to structure the content, CSS for styling, and JavaScript for interactivity and dynamic behavior.`,
    icon: development,
  },
  {
    title: "Responsive Web Design",
    text: `You ensure that websites or applications adapt and respond effectively to different devices and screen sizes, providing an optimal user experience across desktops, laptops, tablets, and mobile devices.`,
    icon: responsive,
  },
  {
    title: "User Interface Development",
    text: `I focus on creating intuitive and interactive interfaces that enable users to navigate and interact with the application seamlessly. This involves implementing features such as dropdown menus, sliders, forms, buttons, and other UI components.`,
    icon: interfaces,
  },
  {
    title: "Cross-Browser Compatibility",
    text: `I ensure that the web application functions consistently across various web browsers (such as Chrome, Firefox, Safari, and Edge), ensuring a smooth experience for users regardless of the browser they use.`,
    icon: browser,
  },
  {
    title: "Performance Optimization",
    text: `I optimize the front-end code, images,  to enhance the website's loading speed and overall performance. This involves techniques such as minification, caching, lazy loading, and optimizing image sizes.`,
    icon: performance,
  },
  {
    title: "Collaboration with Back-End Developers and Designers",
    text: `I work closely with back-end developers to integrate the front-end with the server-side logic and APIs. Additionally, you collaborate with designers to ensure that the final product aligns with the intended design vision.`,
    icon: collaborate,
  },
  {
    title: "Testing and Debugging",
    text: `I perform testing and debugging to identify and resolve any issues or bugs related to the front-end functionality or user experience. This ensures a smooth and error-free experience for users.`,
    icon: debug,
  },
  {
    title: "Keeping Up with Industry Trends",
    text: `As a front-end developer, you stay updated with the latest trends, technologies, and best practices in web development. This includes staying informed about new frameworks, libraries, and tools to enhance your skills and deliver high-quality work.`,
    icon: loop,
  },
];

// const clients = [
//   {
//     name: "Manupa S",
//     img: client1,
//     bio: "Founder & Ceo of Stemlink",
//     stars: 5,
//     comment: `I hired Kayesh to make my complex, parallax website and he did an amazing job! He communicates very well and does everything possible to make sure you are satisfied. I highly recommend Kayesh`,
//   },
//   {
//     name: "Anjan Khan",
//     img: client2,
//     bio: "Manager of Absolute Network",
//     stars: 5,
//     comment: `Kayesh is a great guy to work with. He completed the job just as wanted and promptly responded to my messages while undertaking the project. I wish to work with you in the future too`,
//   },
//   {
//     name: "Michele Clerk",
//     img: client3,
//     bio: "Founder of Cyber-Duck",
//     stars: 5,
//     comment: `Md Kayesh is an exceptional front-end developer. His technical prowess and creativity shine through his work. He prioritize user experience and deliver outstanding interfaces. A valuable asset to any team. Highly recommended!`,
//   },
//   {
//     name: "Andrea Piacquadio",
//     img: client4,
//     bio: "Asistant Manager of Clear Interactive",
//     stars: 5,
//     comment: `Md Kayesh is an outstanding problem solver as a front-end developer. He excel at identifying and resolving complex issues efficiently. His ability to adapt to changing requirements and find innovative solutions sets him apart. A reliable and resourceful team member who consistently delivers results.`,
//   },
// ];

export { navData, skills, projects, socialMedias, services };
