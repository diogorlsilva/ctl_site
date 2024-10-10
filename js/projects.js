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
  projectLinkA.href = `#projetoModal${index}`;
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

function createProjectModalElement(project, lang, index) {
  const projectTitleH2 = getEl("h2", "text-uppercase");
  projectTitleH2.id = `project-modal-title-${index}`;
  projectTitleH2.innerText = project.titulo[lang];

  const projectSubtitleP = getEl("p", "item-intro", "text-muted");
  projectSubtitleP.id = `project-modal-subtitle-${index}`;
  projectSubtitleP.innerText = project.subtitulo[lang];

  const carouselInner = getEl("div", "carousel-inner");

  for (let i = 1; i <= project.numero_de_fotos; i++) {
    const img = getEl("img", "img-fluid", "d-block", "mx-auto");
    img.alt = `foto ${1}`;
    img.src = `conteudo/projetos/fotos_projeto_${index}/foto_${i}.jpg`;
    img.onerror = () => (img.src = "assets/img/no-image.jpg");

    const carouselItem = getEl("div", "carousel-item");

    if (i === 1) {
      carouselItem.classList.add("active");
    }

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  }

  const carouselSlide = getEl("div", "carousel", "slide");
  carouselSlide.id = `carousel-slide-${index}`;
  carouselSlide.setAttribute("data-bs-ride", "carousel");

  const prev = getCarouselOption("prev", index);
  const next = getCarouselOption("next", index);

  carouselSlide.appendChild(carouselInner);
  carouselSlide.appendChild(prev);
  carouselSlide.appendChild(next);

  const descriptionP = getEl("p");
  descriptionP.innerText = project.descricao;

  const modalBodyDiv = getEl("div", "modal-body");

  modalBodyDiv.appendChild(projectTitleH2);
  modalBodyDiv.appendChild(projectSubtitleP);

  if (project.numero_de_fotos > 0) {
    modalBodyDiv.appendChild(carouselSlide);
  }

  modalBodyDiv.appendChild(descriptionP);

  const colLg8Div = getEl("div", "col-lg-8");
  colLg8Div.appendChild(modalBodyDiv);

  const rowDiv = getEl("div", "row", "justify-content-center");
  rowDiv.appendChild(colLg8Div);

  const container = getEl("div", "container");
  container.appendChild(rowDiv);

  const closeImg = getEl("img");
  closeImg.src = "assets/img/close-icon.svg";
  closeImg.alt = "Fechar modal";

  const closeModalDiv = getEl("div", "close-modal");
  closeModalDiv.setAttribute("data-bs-dismiss", "modal");
  closeModalDiv.appendChild(closeImg);

  const modalContent = getEl("div", "modal-content");
  modalContent.appendChild(closeModalDiv);
  modalContent.appendChild(container);

  const modalDialog = getEl("div", "modal-dialog");
  modalDialog.appendChild(modalContent);

  const projectModal = getEl("div", "project-modal", "modal", "fade");
  projectModal.id = `projetoModal${index}`;
  projectModal.setAttribute("tabindex", "-1");
  projectModal.role = "dialog";
  projectModal.setAttribute("aria-hidden", "true");

  projectModal.appendChild(modalDialog);

  return projectModal;
}

function addProjectsElements(lang) {
  const row = document.getElementById("projects-row");
  const body = document.getElementById("topo");

  projetos.forEach((project, i) => {
    const projectElement = createProjectElement(project, lang, i + 1);
    row.appendChild(projectElement);

    const dialog = createProjectModalElement(project, lang, i + 1);

    body.appendChild(dialog);
  });
}

function getEl(name, ...classes) {
  const element = document.createElement(name);

  if (classes.length === 0) {
    return element;
  }

  element.classList.add(...classes);

  return element;
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
