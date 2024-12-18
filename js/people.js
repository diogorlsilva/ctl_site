function createPersonElement(person, lang, index) {
  const img = document.createElement("img");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");

  p.id = `person-title-${index}`;

  img.src = `conteudo/pessoas/fotos/${person.nome_foto}`;
  img.alt = person.nome;
  img.onerror = () => (img.src = "assets/img/no-photo.jpg");
  h4.innerText = person.nome;
  p.innerText = person.titulo[lang];

  img.classList.add("mx-auto", "rounded-circle");
  p.classList.add("text-muted");

  const teamMemberDiv = document.createElement("div");
  teamMemberDiv.classList.add("team-member");

  const a = document.createElement("a");
  a.setAttribute("data-bs-toggle", "modal");
  a.href = `#personModal${index + 1}`;

  a.appendChild(img);

  teamMemberDiv.appendChild(a);
  teamMemberDiv.appendChild(h4);
  teamMemberDiv.appendChild(p);

  const colDiv = document.createElement("div");
  colDiv.classList.add("col-lg-4");

  colDiv.appendChild(teamMemberDiv);

  return colDiv;
}

function addPeopleElements(lang) {
  const row = document.getElementById("people_row");
  const body = document.getElementById("topo");

  pessoas.forEach((person, i) => {
    const personElement = createPersonElement(person, lang, i);

    row.appendChild(personElement);

    const dialog = createModalElement(
      "person",
      lang,
      i + 1,
      person.nome,
      person.titulo,
      person.biografia,
      1,
      `conteudo/pessoas/fotos/${person.nome_foto}`,
      true
    );

    body.appendChild(dialog);
  });
}
