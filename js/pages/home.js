import { ExperienceCard, ProjectCard } from "../components/card.js";

export class HomeBuilder {
  /**
   * @constructs
   * @param {Array.Object} technos
   * @param {Array.Object} projects
   * @param {Array.Object} curriculum
   */
  constructor(technos, projects, curriculum) {
    this._technos = technos;
    this._projects = projects;
    this._curriculum = curriculum;
  }

  /**
   * Render home page contents.
   */
  render() {
    this._renderTechnos();
    this._renderProjects();
    this._renderCurriculumVitae();
  }

  /**
   * Render main technos section.
   */
  _renderTechnos() {
    const technosContainer = document.getElementById("technos-container");

    for (let techno of this._technos) {
      const technoBox = document.createElement("div");

      technoBox.innerHTML = `
        <div class="techno-logo-container">
          <img 
            src="./img/technos/${techno.logo}" 
            alt="logo ${techno.name}" 
            width="64" "height="64" 
          />
        </div>
        <h3>${techno.name}</h3>
      `;
      technoBox.classList.add("techno-container");

      technosContainer.appendChild(technoBox);
    }
  }

  /**
   * Render projects portfolio section.
   */
  _renderProjects() {
    const projectsContainer = document.getElementById("projects-container");

    for (let project of this._projects) {
      projectsContainer.innerHTML += new ProjectCard(project).html;
    }
  }

  /**
   * Render Curriculum Vitae section.
   */
  _renderCurriculumVitae() {
    const curriculumContainer = document.getElementById("curriculum-container");

    for (let experience of this._curriculum) {
      curriculumContainer.innerHTML += new ExperienceCard(experience).html;
    }
  }
}
