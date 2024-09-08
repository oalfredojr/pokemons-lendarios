let pokemonsLendarios = [
    // Pokémon lendários e raros
    {
        titulo: 'Mewtwo',
        descricao: 'Mewtwo é um Pokémon lendário do tipo Psíquico, criado por manipulação genética. Ele é conhecido por seu poder telecinético e é um dos Pokémon mais fortes já criados.',
        link: "https://bulbapedia.bulbagarden.net/wiki/Mewtwo_(Pokémon)",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
        tags: "psíquico telecinético forte"
    },
    {
        titulo: 'Lugia',
        descricao: 'Lugia é um Pokémon lendário do tipo Psíquico/Voador. Conhecido como o Guardião dos Mares, ele tem o poder de acalmar tempestades.',
        link: "https://bulbapedia.bulbagarden.net/wiki/Lugia_(Pokémon)",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png",
        tags: "psíquico voador mares"
    },
    {
        titulo: 'Ho-Oh',
        descricao: 'Ho-Oh é um Pokémon lendário do tipo Fogo/Voador, conhecido como o Guardião dos Céus. Sua presença é um presságio de felicidade eterna.',
        link: "https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pokémon)",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png",
        tags: "fogo voador céus"
    },
    {
        titulo: 'Rayquaza',
        descricao: 'Rayquaza é um Pokémon lendário do tipo Dragão/Voador. Ele vive nas camadas superiores da atmosfera e é conhecido por seu papel em acalmar os Pokémon Groudon e Kyogre.',
        link: "https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pokémon)",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png",
        tags: "dragão voador atmosfera"
    },
    {
        titulo: 'Dialga',
        descricao: 'Dialga é um Pokémon lendário do tipo Aço/Dragão. Ele é conhecido como o mestre do tempo, capaz de controlar o fluxo do tempo.',
        link: "https://bulbapedia.bulbagarden.net/wiki/Dialga_(Pokémon)",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/483.png",
        tags: "aço dragão tempo"
    },
    {
        titulo: 'Giratina',
        descricao: 'Giratina é um Pokémon lendário do tipo Fantasma/Dragão, conhecido por controlar o mundo inverso, um lugar oposto ao mundo real.',
        link: "https://bulbapedia.bulbagarden.net/wiki/Giratina_(Pokémon)",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/487.png",
        tags: "fantasma dragão inverso"
    },
    {
        titulo: 'Celebi',
        descricao: 'Celebi é um Pokémon mítico do tipo Psíquico/Grama, conhecido como o Guardião das Florestas. Ele tem a habilidade de viajar no tempo.',
        link: "https://bulbapedia.bulbagarden.net/wiki/Celebi_(Pokémon)",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png",
        tags: "psíquico grama tempo"
    },
    {
        titulo: 'Jirachi',
        descricao: 'Jirachi é um Pokémon mítico do tipo Aço/Psíquico, conhecido por realizar desejos. Ele é visto apenas uma vez a cada mil anos.',
        link: "https://bulbapedia.bulbagarden.net/wiki/Jirachi_(Pokémon)",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/385.png",
        tags: "aço psíquico desejos"
    },
    {
        titulo: 'Deoxys',
        descricao: 'Deoxys é um Pokémon mítico do tipo Psíquico, criado a partir de um vírus espacial. Ele possui várias formas, cada uma com habilidades únicas.',
        link: "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pokémon)",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/386.png",
        tags: "psíquico espaço formas"
    },
    {
        titulo: 'Zygarde',
        descricao: 'Zygarde é um Pokémon lendário do tipo Dragão/Terra, conhecido por manter o equilíbrio ecológico. Ele tem várias formas, dependendo de sua concentração de células.',
        link: "https://bulbapedia.bulbagarden.net/wiki/Zygarde_(Pokémon)",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/718.png",
        tags: "dragão terra equilíbrio"
    }
];

console.log(pokemonsLendarios);

function verificarEnter(event) {
    if (event.key === 'Enter') {
        pesquisar();
    }
}

function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  let resultados = "";

  for (let dado of pokemonsLendarios) {     
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          resultados += `
          <div class="item-resultado">
              <h2>${dado.titulo}</h2>
              <img src="${dado.imagem}" alt="${dado.titulo}">
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais Informações</a>
          </div>`;
      }
  }

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do Pokémon.</p>";
    return;
  }

  if (!resultados) {
      resultados = "<p>Nada foi encontrado. Tente outro nome ou poder.</p>";
  }

  section.innerHTML = resultados;
}



