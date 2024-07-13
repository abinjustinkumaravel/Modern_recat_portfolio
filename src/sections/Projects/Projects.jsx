import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link11="https://github.com/LiveWiresSRM2023/SRM_CURIOUS_BUG_REACT"
          h3="SRM Curious Bees"
          p="Social Media app"
        />
        <ProjectCard
          src={freshBurger}
          link1="https://github.com/imisgsc/STUDENT_RESULT_MANAGEMENT_AND_ANALYSIS_SYSTEM"
          h3="My Result"
          p="Vidhya Sagar College "
        />
        <ProjectCard
          src={hipsster}
          link1="https://github.com/imisgsc/REACT-NEWSAPP"
          h3="Daily Bites"
          p="React News App"
        />
        <ProjectCard
          src={fitLift}
          link1="https://github.com/imisgsc/Payment-Gateway"
          h3="PayFee"
          p="Payment App"
        />
                <ProjectCard
          src={viberr}
          link11="https://github.com/LiveWiresSRM2023/SRM_CURIOUS_BUG_REACT"
          h3="SRM Curious Bees"
          p="Social Media app"
        />
        <ProjectCard
          src={freshBurger}
          link1="https://github.com/imisgsc/STUDENT_RESULT_MANAGEMENT_AND_ANALYSIS_SYSTEM"
          h3="My Result"
          p="Vidhya Sagar College "
        />
        <ProjectCard
          src={hipsster}
          link1="https://github.com/imisgsc/REACT-NEWSAPP"
          h3="Daily Bites"
          p="React News App"
        />
        <ProjectCard
          src={fitLift}
          link1="https://github.com/imisgsc/Payment-Gateway"
          h3="PayFee"
          p="Payment App"
        />
                <ProjectCard
          src={viberr}
          link11="https://github.com/LiveWiresSRM2023/SRM_CURIOUS_BUG_REACT"
          h3="SRM Curious Bees"
          p="Social Media app"
        />
        <ProjectCard
          src={freshBurger}
          link1="https://github.com/imisgsc/STUDENT_RESULT_MANAGEMENT_AND_ANALYSIS_SYSTEM"
          h3="My Result"
          p="Vidhya Sagar College "
        />
        <ProjectCard
          src={hipsster}
          link1="https://github.com/imisgsc/REACT-NEWSAPP"
          h3="Daily Bites"
          p="React News App"
        />
        <ProjectCard
          src={fitLift}
          link1="https://github.com/imisgsc/Payment-Gateway"
          h3="PayFee"
          p="Payment App"
        />
                <ProjectCard
          src={viberr}
          link11="https://github.com/LiveWiresSRM2023/SRM_CURIOUS_BUG_REACT"
          h3="SRM Curious Bees"
          p="Social Media app"
        />
        <ProjectCard
          src={freshBurger}
          link1="https://github.com/imisgsc/STUDENT_RESULT_MANAGEMENT_AND_ANALYSIS_SYSTEM"
          h3="My Result"
          p="Vidhya Sagar College "
        />
        <ProjectCard
          src={hipsster}
          link1="https://github.com/imisgsc/REACT-NEWSAPP"
          h3="Daily Bites"
          p="React News App"
        />
      </div>
    </section>
  );
}

export default Projects;
