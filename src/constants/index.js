import {
  web,
  react,
  backend,
  java,
  javascript,
  typescript,
  html,
  css,
  boot,
  reactjs,
  affinity,
  tailwind,
  nodejs,
  mongodb,
  word,
  img2,
  img3,
  dikim,
  urran,
  spring,
  green,
  img1,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Developer",
    icon: java,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Affinity Designer",
    icon: affinity,
  },
  {
    name: "Wordpress",
    icon: word,
  },
  {
    name: "BootStrap",
    icon: boot,
  },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "Starbucks",
    iconBg: "#383E56",
    date: "April 2022 - Jan 2023",
    points: [
    "I specialized in backend development with a focus on the Spring Boot framework.", 
    "During this period, I designed and implemented APIs and microservices using Java's object-oriented capabilities.", 
    "My expertise enabled me to build efficient and scalable solutions, utilizing Spring Boot's advanced features for streamlined development.", 
    "I ensured seamless communication between frontend and backend components, delivering reliable and stable applications through continuous integration and testing.",
    ],
  },
  {
    title: "Web Developer",
    iconBg: "#fd7e14",
    date: "October 2021 - Present",
    points: [
      "Since October 2022, I have been proficient in HTML, CSS, JavaScript, and WordPress.", 
      "During this time, I have crafted visually appealing and interactive websites using HTML for content structure, CSS for styling, and JavaScript for dynamic functionalities.", 
      "My expertise in WordPress allowed me to build and customize E-commerce websites with ease, providing clients with user-friendly and scalable solutions.", 
      "Continuously updating my skills and staying current with web development trends, I have been delivering high-quality web experiences to clients to date.",
    ],
  },
  {
    title: "React Developer",
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Since May 2023, I have been an avid React developer, staying abreast of the latest trends in frontend development.", 
      "My journey began by mastering React, a powerful JavaScript framework.To enhance my skills further, I delved into TypeScript, utilizing its strong typing features for more robust code.", 
      "Additionally, I explored Tailwind CSS for efficient and customizable styling and delved into Three.js for immersive 3D experiences.", 
      "Embracing Bootstrap, I rounded off my toolkit to create responsive and visually appealing user interfaces.",
      "Continuously learning and applying these technologies, I am fully equipped to deliver cutting-edge frontend solutions.",
    ],
  },
  {
    title: "Full stack Developer",
    iconBg: "#fd7e14",
    date: "June 2023 - Present",
    points: [
      "I embarked on a journey to expand my skill set. By acquiring proficiency in Node.js, I became adept at both frontend and backend development.", 
      "Seamlessly connecting MongoDB to my frontend, I harnessed the power of data storage and retrieval, enriching the user experience.", 
      "My full stack expertise allows me to craft dynamic web applications that blend intuitive frontend interfaces with robust backend functionality.", 
      "With a relentless pursuit of knowledge, I continually evolve my skills to meet the ever-changing demands of full stack development, ensuring I deliver top-notch solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "Aaron brought our vision to life with a stunning website that embodies Dikim Rock Garden's essence.",
    name: "Mr Akim",
    designation: "CEO",
    company: "Dikim Rock Garden",
    image: img1,
  },
  {
    testimonial:
      "He skillfully crafted our law firm website, showcasing expertise.",
    name: "Bar I.C.Kigun",
    designation: "Owner",
    company: "Urranden Solicitors",
    image:img2,
  },
  {
    testimonial:
      "Aaron delivered a top-notch ecommerce website for UrranStores",
    name: "Urranstores Team",
    designation: "Team",
    company: "UrranStores",
    image: img3,
  },
];

const projects = [
  {
    name: "Dikim Rock Garden",
    description:
      "Dikim Rock Garden's website is an enchanting online portal that showcases their relaxation spot, lodging services, bar, restaurant, VIP lounge, garden, and hall, providing visitors with an immersive and visually captivating experience.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: dikim,
    source_code_link: "https://dikimrockgarden.wordpress.com",
  },
  {
    name: "Green Express",
    description:
      "Green Express is a waste management order web application that empowers users to efficiently schedule waste disposal services, access real-time waste pickup information, and track waste management operations seamlessly, all in one place.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: green,
    source_code_link: "https://greenexpress.com/",
  },
  {
    name: "Urran Stores",
    description:
      "UrranStores is an ecommerce website that offers a seamless shopping experience, allowing users to explore a wide range of products, add items to their cart, and securely complete purchases online, ensuring a convenient and satisfying shopping journey.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: urran,
    source_code_link: "https://uranstore.store/",
  },
];

export { services, technologies, experiences, testimonials, projects };
