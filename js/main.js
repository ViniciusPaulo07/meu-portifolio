// Selecionamos o fomulário no HTML usando o ID que você criou.
const form = document.getElementById("contact-form");

// Ouvimos o evento de "submit" (quando o usuário clica no botão).
form.addEventListener("submit", function (event) {
  // Impedimos o navegador de recarregar a página.
  event.preventDefault();

  // Pegamos os valores dos campos.
  const nome = document.getElementById("nome").value.trim(); // .trim() remove espaços vazios
  const email = document.getElementById("email").value;

  if (nome.length < 3) {
    alert("Por favor, digite um nome válido (mínimo 3 caracteres).");
    return; //Interrompe a execução aqui
  }

  // Exibimos um feedback para o usuário.
  alert(
    `Olá ${nome}, sua mensagem foi enviada com sucesso para o e-mail: ${email}`
  );

  // Limpamos o formulário.
  form.reset();
});

lucide.createIcons();

//Criamos um Array de Objetos. É como uma mini base de dados do seu código.
const meusProjetos = [
  {
    titulo: "Portfólio Pessoal",
    descricao: "Site moderno para apresentação de projetos.",
    techs: ["HTML", "CSS", "JS"],
    link: "https://github.com/ViniciusPaulo07/meu-portifolio.git",
  },
  {
    titulo: "Projeto Futuro",
    descricao: "Em breve um novo projeto será listado aqui.",
    techs: ["???"],
    link: "#",
  },
];

//Selecionamos o container no HTML onde os cards vão "morar".
const gridProjetos = document.querySelector(".projects-grid");

// Criamos uma função para desenhar os cards na tela
function carregarProjetos() {
  // Limpamos o conteúdo atual do HTML
  gridProjetos.innerHTML = "";

  // Para cada projeto dentro da nossa lista, fazemos o seguinte:
  meusProjetos.forEach((projeto) => {
    // Criamos o HTML do card usando Crases (Template Strings)
    const cardHTML = `
            <article class="project-card">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <div class="techs">
                    ${projeto.techs.map((t) => `<span>${t}</span>`).join("")}
                </div>
                    <a href="${
                      projeto.link
                    }" target="_black">Ver Repositório</a>
            </article>
        `;
    // Adicionamos esse card dentro da nossa div principal
    gridProjetos.innerHTML += cardHTML;
  });
}
// Chamamos a função para ela rodar assim que o site carregar
carregarProjetos();
