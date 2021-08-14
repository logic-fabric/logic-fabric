import { ProjectCard } from "../components/card.js";

export class HomeBuilder {
  constructor(technos, projects) {
    this._technos = technos;
    this._projects = projects;
  }

  render() {
    this._renderTechnos();
    this._renderProjects();
  }

  _renderTechnos() {
    const technosContainer = document.getElementById("technos-container");

    for (let techno of this._technos) {
      const technoBox = document.createElement("div");

      technoBox.innerHTML = `
        <i class="${techno.icon}"></i>
        <h3>${techno.name}</h3>
      `;
      technosContainer.appendChild(technoBox);
    }
  }

  _renderProjects() {
    const projectsContainer = document.getElementById("projects-container");

    for (let project of this._projects) {
      projectsContainer.innerHTML += new ProjectCard(project).html;
    }
  }
}
