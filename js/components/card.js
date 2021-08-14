export class ProjectCard {
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

  get html() {
    return `<article class="card">
        <div class="card__cover">
          <img 
            src="./img/projects/${this._cover}" 
            alt="Capture du projet ${this._title}" 
          />
        </div>

        <a 
          class="card__link github-link${this._github ? "" : " disabled"}" 
          href="${this._github}"
        >
          <i class="fab fa-${this._gitlab ? "gitlab" : "github"}"></i>
        </a>
        <a 
          class="card__link online-link${this._online ? "" : " disabled"}" 
          href="${this._online}"
        >
          <i class="fas fa-globe"></i>
        </a>

        <h3 class="card__title">${this._title}</h3>

        <div>${this._getTagsHtml()}</div>

        <p class="card__description">${this._description}</p>

        <div class="card__responsive">
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

  _getTagsHtml() {
    let tagsHtml = "";

    for (let tag of this._tags) {
      tagsHtml += `<span class="card__tag${
        tag === "pro" ? " pro-tag" : ""
      }">${tag}</span>`;
    }

    return tagsHtml;
  }
}
