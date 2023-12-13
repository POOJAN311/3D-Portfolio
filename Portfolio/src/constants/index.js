import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    keryar,
    shopify,
    techno,
    django,
    todo,
    visa,
    carrent,
    jobit,
    tripguide,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: backend,
    },
    {
        title: "Content Writer",
        icon: creator,
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
        name: "Redux Toolkit",
        icon: redux,
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
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Angular.js Intern",
        company_name: "KERYAR",
        icon: keryar,
        iconBg: "#383E56",
        date: "May 2022 - July 2022",
        points: [
            "Implemented the development of Salon Management Website to automate the products and services provided by the salon.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Our Salon Management Website offers a range of essential features, including:",
            "Product Management: Effortlessly add and manage salon products and supplies.",
            "Services Listing: Maintain a comprehensive list of services offered.",
            "Invoice Generation: Streamline billing and invoice generation for clients."
        ],
    },
    {
        title: "Django & PHP Developer",
        company_name: "TechnoGuide Infosoft Pvt Ltd.",
        icon: techno,
        iconBg: "#E6DEDD",
        date: "May 2023 - Jul 2023",
        points: [
            "Developing and maintaining web applications using Django, CodeIgniter and other related technologies.",
            "As a Frontend and Backend Developer, I've implemented the development of the VISA CRM system, a consultancy platform designed to assist students, faculty, and counselors in their study abroad journeys.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Modules implemented: (i) Student Module (ii) Counselor Module (iii) Admin Module",
        ],
    },
    {
        title: "Freelance Web Developer",
        company_name: "Fiverr",
        icon: shopify,
        iconBg: "#383E56",
        date: "Aug 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "To-Do List",
        description:
            "To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Material UI",
                color: "pink-text-gradient",
            },
        ],
        image: todo,
        source_code_link: "https://github.com/POOJAN311/FancyToDo",
    },
    {
        name: "Django Authentication",
        description:
            "Django's built-in authentication system includes permissions, users, and groups. Django automatically creates four default permissions when you create a model—add, delete, change, and view.",
        tags: [
            {
                name: "Django",
                color: "blue-text-gradient",
            },
            {
                name: "CRUD",
                color: "green-text-gradient",
            },
            {
                name: "authenticate",
                color: "pink-text-gradient",
            },
        ],
        image: django,
        source_code_link: "https://github.com/POOJAN311/Authentication",
    },
    {
        name: "VISA CRM",
        description:
            "A specialized Customer Relationship Management system helps organizations in multiple ways. An immigration CRM tool allows you to manage the lead's data and status.",
        tags: [
            {
                name: "CodeIgniter",
                color: "blue-text-gradient",
            },
            {
                name: "MySQl",
                color: "green-text-gradient",
            },
            {
                name: "Django",
                color: "pink-text-gradient",
            },
        ],
        image: visa,
        source_code_link: "https://github.com/POOJAN311/VisaCRM",
    },
];

export { services, technologies, experiences, projects };