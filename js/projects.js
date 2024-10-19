function createProjectElement(project, lang, index) {
  // Project Link
  const i = document.createElement("i");
  i.classList.add("fas", "fa-plus", "fa-3x");

  const projectHoverContentDiv = document.createElement("div");
  projectHoverContentDiv.classList.add("project-hover-content");
  projectHoverContentDiv.appendChild(i);

  const img = document.createElement("img");
  img.alt = project.titulo[lang];
  img.classList.add("img-fluid");

  img.src =
    project.numero_de_fotos > 0
      ? `conteudo/projetos/fotos_projeto_${index}/foto_1.jpg`
      : "assets/img/no-image.jpg";
  img.onerror = () => (img.src = "assets/img/no-image.jpg");

  const projectHoverDiv = document.createElement("div");
  projectHoverDiv.classList.add("project-hover");
  projectHoverDiv.appendChild(projectHoverContentDiv);

  const projectLinkA = document.createElement("a");
  projectLinkA.classList.add("project-link");
  projectLinkA.href = `#projectModal${index}`;
  projectLinkA.setAttribute("data-bs-toggle", "modal");

  projectLinkA.appendChild(projectHoverDiv);
  projectLinkA.appendChild(img);

  // Title and Subtitle
  const captionTitleDiv = document.createElement("div");
  captionTitleDiv.id = `project-title-${index}`;
  captionTitleDiv.innerText = project.titulo[lang];
  captionTitleDiv.classList.add("project-caption-heading");

  const captionSubtitleDiv = document.createElement("div");
  captionSubtitleDiv.id = `project-subtitle-${index}`;
  captionSubtitleDiv.innerText = project.subtitulo[lang];
  captionSubtitleDiv.classList.add("project-caption-subheading", "text-muted");

  const captionDiv = document.createElement("div");
  captionDiv.classList.add("project-caption");

  captionDiv.appendChild(captionTitleDiv);
  captionDiv.appendChild(captionSubtitleDiv);

  // Project Item

  const projectItemDiv = document.createElement("div");
  projectItemDiv.classList.add("project-item");

  projectItemDiv.appendChild(projectLinkA);
  projectItemDiv.appendChild(captionDiv);

  const colDiv = document.createElement("div");
  colDiv.classList.add("col-lg-4", "col-sm-6", "mb-4");

  colDiv.appendChild(projectItemDiv);

  return colDiv;
}

function addProjectsElements(lang) {
  const row = document.getElementById("projects-row");
  const body = document.getElementById("topo");

  projetos.forEach((project, i) => {
    const index = i + 1;

    const projectElement = createProjectElement(project, lang, index);
    row.appendChild(projectElement);

    const dialog = createModalElement(
      "project",
      lang,
      index,
      project.titulo,
      project.subtitulo,
      project.descricao,
      project.numero_de_fotos,
      `conteudo/projetos/fotos_projeto_${index}`
    );

    body.appendChild(dialog);
  });
}

function getCarouselOption(direction, index) {
  const span = getEl("span", `carousel-control-${direction}-icon`);
  span.setAttribute("aria-hidden", true);

  const a = getEl("a", `carousel-control-${direction}`);
  a.href = `#carousel-slide-${index}`;
  a.role = "button";
  a.setAttribute("data-bs-slide", direction);

  a.appendChild(span);

  return a;
}
