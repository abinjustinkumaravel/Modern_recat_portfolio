import styles from './ProjectsStyles.module.css';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import AUTH from '../../assets/AUTH.jpeg';
import Blog from "../../assets/BLOG.jpeg";
import ECOM from "../../assets/ECOM.jpeg";


const projects = [
  { src: ECOM, link1: '#', h3:"Project 1", p: 'A cool project',},
  { src: Blog, link1: '#', h3:"Project 1", p: 'A cool project',},
  { src: AUTH, link1: '#', h3:"Project 1", p: 'A cool project',},
  { src: fitLift, link1: '#', h3:"Project 1", p: 'A cool project',},
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </div>
    </section>
  );
}

export default Projects;
