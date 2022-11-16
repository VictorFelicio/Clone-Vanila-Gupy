const btnPerfil = document.getElementById("btn-per");

function toggleMenu() {
  const card = document.getElementById("card-click");
  card.classList.toggle("active");
}

btnPerfil.addEventListener("click", toggleMenu);

const btnHeader = document.querySelector(".btn-header");

btnHeader.addEventListener("click", toggleMenu);
