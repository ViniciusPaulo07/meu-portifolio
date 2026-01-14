// 1. Selecionamos o fomulário no HTML usando o ID que você criou.
const form = document.getElementById("contact-form");

// 2. Ouvimos o evento de "submit" (quando o usuário clica no botão).
form.addEventListener("submit", function (event) {
  // 3.Impedimos o navegador de recarregar a página.
  event.preventDefault();

  // 4. Pegamos os valores dos campos.
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  // 5.Exibimos um feedback para o usuário.
  alert(
    `Olá ${nome}, sua mensagem foi enviada com sucesso para o e-mail: ${email}`
  );

  // Limpamos o formulário.
  form.reset();
});
