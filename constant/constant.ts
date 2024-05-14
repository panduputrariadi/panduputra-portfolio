import { FiMonitor, FiLayout, FiCode } from "react-icons/fi";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/pandu-putra-91907a267/", label: "LinkedIn" },
  { href: "https://www.instagram.com/panduputra___/", label: "Instagram" },
  { href: "https://github.com/panduputrariadi", label: "Github" },
];

export const SERVICES = [
  {
    title: "Refreshing Design Website",
    description: "Working with using refreshing design and modern design with Next.js and React",
    label: "Monitor",
  },
  {
    title: "Using Tailwind CSS",
    description: "Using Tailwind CSS to implement website design",
    label: "Layout",
  },
  {
    title: "Tech Update",
    description: "Using the newest technology update to implement client needs",
    label: "Code",
  },
  {
    title: "Full Stack Development with Laravel",
    description: "Building full stack applications using Laravel framework",
    label: "Layout",
  },
  {
    title: "API Endpoint Development with Golang",
    description: "Developing efficient API endpoints using Golang programming language",
    label: "Code",
  },
];
export const projects = [
  {
    id: 1,
    title: "Krisna Komputer Sales Information System",
    description: "Description of Project 1",
    imageUrl: "/images/p-1.png",
    href: "https://github.com/panduputrariadi/krisna-komputer.git",
    author: {
      name: "Pandu Putra",
      imageUrl: "/images/person-1.png"
    },
    publishedDate: "12/01/2024",
    type: "Final Exams"
  },
  {
    id: 2,
    title: "UD Dewi Suter Market Information System",
    description: "Description of Project 2",
    imageUrl: "/images/p-2.png",
    href: "https://github.com/panduputrariadi/uddewisuter",
    author: {
      name: "Pandu Putra",
      imageUrl: "/images/person-1.png"
    },
    publishedDate: "20/03/2024",
    type: "Final Exams"
  },
  {
    id: 3,
    title: "Wisata Desa Sukawati's Static Website",
    description: "Description of Project 2",
    imageUrl: "/images/p-3.png",
    href: "https://github.com/panduputrariadi/wisata-desa-sukawati",
    author: {
      name: "Pandu Putra",
      imageUrl: "/images/person-1.png"
    },
    publishedDate: "20/03/2024",
    type: "Final Exams"
  },
  {
    id: 4,
    title: "Restful API School With Express js",
    description: "Description of Project 2",
    imageUrl: "/images/p-4.png",
    href: "https://github.com/panduputrariadi/API-SCHOOL-WITH-EXPRESS",
    author: {
      name: "Pandu Putra",
      imageUrl: "/images/person-1.png"
    },
    publishedDate: "20/03/2024",
    type: "Project Exercise"
  },
  {
    id: 5,
    title: "To Do App With React",
    description: "Description of Project 2",
    imageUrl: "/images/p-5.png",
    href: "https://github.com/panduputrariadi/todoApp",
    author: {
      name: "Pandu Putra",
      imageUrl: "/images/person-1.png"
    },
    publishedDate: "20/03/2024",
    type: "Project Exercise"
  },
  {
    id: 6,
    title: "Auto Restore Database with Golang",
    description: "Description of Project 2",
    imageUrl: "/images/p-6.png",
    href: "https://github.com/panduputrariadi/auto_restore_db",
    author: {
      name: "Pandu putra",
      imageUrl: "/images/person-1.png"
    },
    publishedDate: "20/03/2024",
    type: "Final Project"
  },
];

export const testimonials = [
  {
    name: "John Doe",
    text: "The website designed for my business has exceeded all my expectations. It's user-friendly, visually appealing, and has significantly increased my customer engagement. Highly recommend their services!",
    image: "/images/t-1.jpeg",
  },
  {
    name: "Jane Smith",
    text: "I am thrilled with the website created for my online store. The design is modern, the functionality is seamless, and it has greatly improved my sales. The team's support and expertise were exceptional.",
    image: "/images/t-2.jpeg",
  },
  {
    name: "Alice Johnson",
    text: "Working with this team was a fantastic experience. They delivered a website that perfectly captures my brand's essence and provides an excellent user experience. I have received numerous compliments from my clients.",
    image: "/images/t-3.jpeg",
  },
  {
    name: "Michael Brown",
    text: "The website they built for us is simply outstanding. It's fast, secure, and beautifully designed. It has helped us reach a broader audience and improve our online presence. I couldn't be happier with the results.",
    image: "/images/t-1.jpeg",
  },
  {
    name: "Sarah Wilson",
    text: "From start to finish, the process was smooth and professional. The final website is not only stunning but also highly functional. It has been a game-changer for our business. Thank you for the amazing work!",
    image: "/images/t-2.jpeg",
  },
];
