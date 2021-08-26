export class ProjectCard {
  /**
   * @constructs
   * @param {Object} project
   */
  constructor(project) {
    this._title = project.title;
    this._cover = project.cover;
    this._gitlab = project.gitlab;
    this._github = project.github;
    this._online = project.online;
    this._tags = project.tags;
    this._description = project.description;
    this._responsive = project.responsive;
  }

  /**
   * @returns {string}
   */
  get html() {
    return `<article class="project-card">
        <div class="project-card__cover">
          <img 
            src="./img/projects/${this._cover}" 
            alt="Capture du projet ${this._title}" 
          />
        </div>

        ${this._getLinkHtml(this._github, "github")}
        ${this._getLinkHtml(this._online, "online")}

        <h3 class="project-card__title">${this._title}</h3>

        <div>${this._getTagsHtml()}</div>

        <p class="project-card__description">${this._description}</p>

        <div class="project-card__responsive">
          <i 
            class="fas fa-mobile-alt${
              this._responsive.includes("sm") ? "" : " disabled"
            }"
            title="responsive pour smartphone"
          ></i>
          <i 
            class="fas fa-tablet-alt${
              this._responsive.includes("md") ? "" : " disabled"
            }"
            title="responsive pour tablette"
          ></i>
          <i 
            class="fas fa-desktop${
              this._responsive.includes("lg") ? "" : " disabled"
            }"
            title="responsive pour desktop"
          ></i>
        </div>
      </article>`;
  }

  /**
   * @returns {string}
   */
  _getLinkHtml(url, linkType) {
    let icon, title;

    if (linkType === "github") {
      icon = this._gitlab ? "fab fa-gitlab" : "fab fa-github";
      title= "code source"
    } else {
      icon = "fas fa-globe";
      title = "site démo"
    }

    return `${url ? "<a " : "<span "}
          class="project-card__link ${linkType}-link${url ? "" : " disabled"}" 
          href="${url}"
          title="${title}"
        >
          <i class="${icon}"></i>
        ${url ? "</a> " : "</span>"}`;
  }

  /**
   * @returns {string}
   */
  _getTagsHtml() {
    let tagsHtml = "";

    for (let tag of this._tags) {
      tagsHtml += `<span class="project-card__tag${
        tag === "pro" ? " pro-tag" : ""
      }">${tag}</span>`;
    }

    return tagsHtml;
  }
}

export class ExperienceCard {
  /**
   * @constructs
   * @param {Object} experience
   */
  constructor(experience) {
    this._title = experience.title;
    this._type = experience.type;
    this._organization = experience.organization;
    this._period = experience.period;
  }

  /**
   * @returns {string}
   */
  get html() {
    return `<article class="experience-card ${this._type}">
        <div>
          <i class="fas fa-${
            this._type === "job" ? "briefcase" : "graduation-cap"
          }"></i>
        </div>

        <div>
          <h3 class="experience-card__title">${this._title}</h3>
          <h4 class="experience-card__organization">${this._organization}</h4>
          <p class="experience-card__period">${this._period}</p>
        </div>
      </article>`;
  }
}
