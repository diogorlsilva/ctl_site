function createPersonElement(person, lang, index) {
  const img = document.createElement("img");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");

  p.id = `person-title-${index}`;

  img.src = `conteudo/fotos_pessoas/${person.nome_foto}`;
  h4.innerText = person.nome;
  p.innerText = person.titulo[lang];

  img.classList.add("mx-auto", "rounded-circle");
  p.classList.add("text-muted");

  const teamMemberDiv = document.createElement("div");
  teamMemberDiv.classList.add("team-member");

  teamMemberDiv.appendChild(img);
  teamMemberDiv.appendChild(h4);
  teamMemberDiv.appendChild(p);

  const colDiv = document.createElement("div");
  colDiv.classList.add("col-lg-4");

  colDiv.appendChild(teamMemberDiv);

  return colDiv;
}

function addPeopleElements(lang) {
  const row = document.getElementById("people_row");

  pessoas.forEach((person, i) => {
    const personElement = createPersonElement(person, lang, i);

    row.appendChild(personElement);
  });
}
