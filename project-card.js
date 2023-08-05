class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    let h2 = document.createElement("h2");
    h2.textContent = this.getAttribute("title");

    let img = document.createElement("img");
    img.src = this.getAttribute("img-src");
    img.alt = this.getAttribute("img-alt");

    let p = document.createElement("p");
    p.textContent = this.getAttribute("description");

    let a = document.createElement("a");
    a.href = this.getAttribute("read-more-url");
    a.textContent = "Read More";
    a.target = "_blank";

    let section = document.createElement("section");
    section.append(h2, img, p, a);

    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "project-card.css";

    this.shadowRoot.append(link);
    this.shadowRoot.append(section);
  }

  update(element) {
    const shadowRoot = element.shadowRoot;

    const h2 = shadowRoot.querySelector("h2");
    h2.textContent = this.getAttribute("title");

    const img = shadowRoot.querySelector("img");
    img.src = this.getAttribute("img-src");
    img.alt = this.getAttribute("img-alt");

    const p = shadowRoot.querySelector("p");
    p.textContent = this.getAttribute("description");

    const a = shadowRoot.querySelector("a");
    a.href = this.getAttribute("read-more-url");
  }

  connectedCallback() {
    this.update(this);
  }
}

window.customElements.define("project-card", ProjectCard);
