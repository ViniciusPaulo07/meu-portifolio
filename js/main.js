// Selecionamos o fomulário no HTML usando o ID que você criou.
const form = document.getElementById("contact-form");

// Ouvimos o evento de "submit" (quando o usuário clica no botão).
form.addEventListener("submit", function (event) {
  // 3.Impedimos o navegador de recarregar a página.
  event.preventDefault();

  // Pegamos os valores dos campos.
  const nome = document.getElementById("nome").value.trim(); // .trim() remove espaços vazios
  const email = document.getElementById("email").value;

    if(nome.length < 3) {
        alert("Por favor, digite um nome válido (mínimo 3 caracteres).")
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

const meusProjetos = [
    {
        titulo: "Portifólio Pessaol",
        descricao: "Site moderno para apresentação de projetos.",
        techs: ["HTML", "CSS", "JS"],
        link: "#"
    },
    {
        titulo: "Calculadora de Gorjetas",
        descricao: "Aplicação simples para praticar lógica JS.",
        techs: ["JS", "CSS"],
        link: "#"
    }
];

const grid = document.querySelector('.projects-grid');

// Função para criar os cards automaticamente
meusProjetos.forEach(projetos => {
    const card = `
        <article class="project-card">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <div class="techs">
                ${projeto.techs.map(t => `<span>${t}</span>`).join('')}
            </div>
            <a href="${projeto.link}">Ver Repositório</a>
        </article>
     `;
     grid.innerHTML += card;
});