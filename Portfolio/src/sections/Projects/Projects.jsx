import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png?rf=1024"
          link="https://github.com/Thivakaran-R/Project/tree/main/weather"
          h3="Weather App"
          // p="Streaming App"
        />
        <ProjectCard
          src="https://static.vecteezy.com/system/resources/previews/015/154/894/original/currency-exchange-money-convert-icon-dollar-euro-transfer-symbol-sign-free-vector.jpg"
          link="https://github.com/Thivakaran-R/Project"
          h3="Currency Converter"
          // p="Hamburger Restaurant"
        />
        <ProjectCard
          src="https://miro.medium.com/v2/resize:fit:763/1*3kV_QmhboTgiNEFn3LsY1A.png"
          link="https://github.com/Thivakaran-R/Project"
          h3="CRUD Application"
          // p="Glasses Shop"
        />
        <ProjectCard
          src="https://media.licdn.com/dms/image/C4E12AQGO1XvoQbXQtw/article-cover_image-shrink_600_2000/0/1531221410013?e=2147483647&v=beta&t=v3XlRUnpI7FKrw-ih1IQafn-HiZ-AZDZsppePD2dG3k"
          link="https://github.com/Thivakaran-R/Project/tree/main/Portfolio"
          h3="Portfolio"
          // p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
