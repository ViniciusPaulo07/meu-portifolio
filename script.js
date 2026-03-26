const spanAno = document.getElementById("ano");
const anoAtual = new Date().getFullYear();

if (spanAno) {
  spanAno.textContent = anoAtual;
}

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    header.classList.add("rolado");
  } else {
    header.classList.remove("rolado");
  }
});

const elementosAnimados = document.querySelectorAll(".animar");

const observador = new IntersectionObserver(
  function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

elementosAnimados.forEach(function (elemento) {
  observador.observe(elemento);
});
