import project1 from "../src/assets/images/My-Projects/epslogo.png";
import project2 from "../src/assets/images/My-Projects/Roomster-Logo.png";
import project3 from "../src/assets/images/My-Projects/sarhny.png";
import project4 from "../src/assets/images/My-Projects/Bmi.png";
import project5 from "../src/assets/images/My-Projects/flash.png";

import { DiWebplatform } from "react-icons/di";
import { AiOutlineMobile } from "react-icons/ai";
import { AiFillPicture } from "react-icons/ai";
import { BiCool } from "react-icons/bi";


export const DeveloperInfo = {
  name: "Eslam Gouda Emam",
  about:
    `I am Eslam Gouda Emam ,Full Stack Web Developer with experience building web applications using the ME(A/R)N stack (MongoDB,
      Express.js, AngularJS, ReactJS, and Node.js). Skilled in developing RESTful APIs, and creating responsive
      user interfaces. Proficient in JavaScript, HTML, CSS, and various front-end frameworks such as Angular and
      React.js. Experienced in database design and management using MongoDB.`,
  mainSkills: [
    { title: "JAVASCRIPT", precent: "80" },
    { title: "REACT JS", precent: "85" },
    { title: "AngularJS", precent: "70" },
    { title: "NodeJs", precent: "90" },
    { title: "MongoDB", precent: "95" },
    { title: "Bootstrap", precent: "80" },
    { title: "Material UI", precent: "85" },
  ],
  generalSkills: [
    { title: "HTML5", precent: "90" },
    { title: "CSS3", precent: "80" },
    { title: "Agile Project Management", precent: "80" },
    { title: "DataBase", precent: "70" },
    { title: "Network", precent: "70" },
    { title: "Cloud", precent: "50" },
    { title: "Flutter Development", precent: "75" },
  ],
  projects: [
    {
      title: "Roomster",
      image: project2,
      desc: `Website that connects people searching for a place to live with potential
      roommates and landlords. The website offers a wide range of housing options,
      including apartments, houses, and rooms for rent with Tools: (ReactJs, Html5, Css3, Material Ui, MongoDB, Express.js, NodeJs.ٍ
        Socket.IO, Stripe, Cloudinary)`,
      link: "https://roomster.vercel.app/",
      gitLink: "https://github.com/EslamGouda97/My-Roomster",
    },
    {
      title: "EPS",
      image: project1,
      desc: `Website for Electrical Power Services company that provides electrical testing and measurements would be focused on showcasing the company's services and expertise in this area with Tools: (ReactJs, Html5, Css3, Bootstrap) 
      `,
      link: "https://eps-official.surge.sh/",
      gitLink: "https://github.com/EslamGouda97/EPS",
    },
    {
      title: "Flash chat",
      image: project5,
      desc: `Mobile App that allows users to chat with each other in real-time with Tools: (Flutter, Dart, Firebase)`,
      link: "https://github.com/EslamGouda97/Flash-Chat",
      gitLink: "https://github.com/EslamGouda97/Flash-Chat",
    },
    {
      title: "BMI",
      image: project4,
      desc: `Software application that allows users to calculate their (Body Mass Index) based
      on their height and weight with Tools: (Flutter, Dart) `,
      link: "https://github.com/EslamGouda97/BMI",
      gitLink: "https://github.com/EslamGouda97/BMI",
    },
    {
      title: "Sarhny",
      image: project3,
      desc:`Simple Website that allows users to receive honest feedback from their friends,
      coworkers, or acquaintances without fear of judgment or reprisal with Tools: (ReactJs, Html5, Css3, Material Ui, MongoDB, Express.js and NodeJs)`,
      link: "https://sarhny-client.vercel.app/",
      gitLink: "https://github.com/EslamGouda97/Sare7ny",
    },

  ],
  services: [
    {
      icon: <AiFillPicture scale={2} />,
      title: "WEB DESIGNING",
      desc: "Creating and designing visually appealing and functional websites",
    },
    {
      icon: <DiWebplatform scale={2} />,
      title: "WEB DEVELOPING",
      desc: "Creating and building websites that are functional, dynamic, and visually appealing with combination of programming languages, frameworks, and tools.",
    },
    {
      icon: <AiOutlineMobile scale={2} />,
      title: "Mobile DEVELOPING",
      desc: "Great Experience In Build Apps By Flutter",
    },
    {
      icon: <BiCool scale={2} />,
      title: "UI/UX DESIGN ",
      desc: "creating the user interface (UI) and user experience (UX) design for digital products, including websites, mobile apps, and software applications.",
    },
  ],
};
