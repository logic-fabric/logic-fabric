export class HomeBuilder {
  constructor(technos) {
    this._technos = technos;
  }

  render() {
    this._renderTechnos();
  }

  _renderTechnos() {
    const technosContainer = document.getElementById("technos-container");

    for (let techno of this._technos) {
      const technoBox = document.createElement("div");
      
      technoBox.innerHTML =`
        <i class="${techno.icon}"></i>
        <h3>${techno.name}</h3>
      `
      technosContainer.appendChild(technoBox)
    }
  }
}
