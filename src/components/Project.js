import "./Project.css";
import project1 from "../img/project/project1.png";
import project2 from "../img/project/project2.jpeg";
import project3 from "../img/project/project3.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaRProject } from "react-icons/fa";
import { faGephi } from "@fortawesome/free-brands-svg-icons";
import ProjectDetail from "./ProjectDetail";
export default function Project() {
  const projectLists = [
    {
      id: 1,
      name: "The music band",
      image: project1,
      title: "Responsive Web Design",
      desc: "Practicing HTML, CSS and JavaScript with W3schools project to understand and have more knowledge about a responsive website on PC, Tablet and Mobile. Controlling hidden navigation menu, working with Row and Column layout, and the position of all the elements in the web.",
      tech: "HTML, CSS, JAVASCRIPT",
      icon: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      gitHub: "https://github.com/HauVu-flinders/web_the_band",
      page: "https://hauvu-flinders.github.io/web_the_band/",
    },
    {
      id: 2,
      name: "Sally's portfolio",
      image: project2,
      title: "Build portfolio using React",
      desc: "Practicing React by building my portfolio .",
      tech: "HTML, CSS, JAVASCRIPT",
      icon: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
      gitHub: "",
      page: "",
    },

    {
      id: 3,
      name: "Network analysis",
      image: project3,
      title: "Academic Master Project",
      desc: "Using R language for data processing and Gephi for data visualization",
      tech: "R, Gephi",
      icon: [<FaRProject />, <faGephi />],
      gitHub: "https://github.com/HauVu-flinders/network_analysis",
      page: "",
    },
  ];
  return (
    <div>
      {projectLists.map((project) => (
        <ProjectDetail
          key={project.id}
          name={project.name}
          image={project.image}
          title={project.title}
          description={project.desc}
          tech={project.tech}
          icon={project.icon}
          gitHub={project.gitHub}
        />
      ))}
    </div>
  );
}
