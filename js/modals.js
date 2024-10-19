function createModalElement(
  code,
  lang,
  index,
  title,
  subtitle,
  description,
  photoCount,
  imgFolderSrc
) {
  const titleH2 = getEl("h2", "text-uppercase");
  titleH2.id = `${code}-modal-title-${index}`;
  titleH2.innerText = title[lang];

  const subtitleP = getEl("p", "item-intro", "text-muted");
  subtitleP.id = `${code}-modal-subtitle-${index}`;
  subtitleP.innerText = subtitle[lang];

  const carouselInner = getEl("div", "carousel-inner");

  for (let i = 1; i <= photoCount; i++) {
    const img = getEl("img", "img-fluid", "d-block", "mx-auto");
    img.alt = `foto ${1}`;
    img.src = `${imgFolderSrc}/foto_${i}.jpg`;
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
  descriptionP.innerText = description;

  const modalBodyDiv = getEl("div", "modal-body");

  modalBodyDiv.appendChild(titleH2);
  modalBodyDiv.appendChild(subtitleP);

  if (photoCount > 0) {
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

  const modal = getEl("div", `item-modal`, "modal", "fade");
  modal.id = `${code}Modal${index}`;
  modal.setAttribute("tabindex", "-1");
  modal.role = "dialog";
  modal.setAttribute("aria-hidden", "true");

  modal.appendChild(modalDialog);

  return modal;
}
