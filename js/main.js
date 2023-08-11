/* document.addEventListener("DOMContentLoaded", (e) => {

let bandera = 0;
  window.addEventListener('scroll', () => {
  const posicionHorizontal = window.scrollX;
  const posicionVertical = window.scrollY;

  mostrar = Math.floor(posicionVertical / 10) ;
  console.log(mostrar);

  if((mostrar > 68 && mostrar < 88) && bandera === 0){
    bandera++
    console.log("hola");
  }

});

}); */

const contenido = document.querySelector(".row");
const template = document.getElementById("menu");
const fragment = document.createDocumentFragment();
const desplegar = document.getElementById("desplegar");
const btnMenus = document.querySelectorAll(".ul__menu");
const ver = document.getElementById("verTodos");

const urlJSON = "https://heroic-tartufo-7f6eec.netlify.app/productos.json";
const Menu = [];

fetch(urlJSON)
  .then((response) => response.json())
  .then((data) => {
    pintar(data);
    Menu.push(data);
  })
  .catch((err) => console.log(err))
  .finally();

function pintar(data) {
  contenido.textContent = "";

  for (let i = 0; i < 5; i++) {
    const clone = template.content.cloneNode(true);

    clone.querySelector("img").setAttribute("src", data[i].url);
    clone.querySelector(".card-title").textContent = data[i].name;
    clone.querySelector(".card-text").textContent = data[i].description;

    fragment.appendChild(clone);
  }

  contenido.appendChild(fragment);
}

desplegar.addEventListener("click", () => {
  document.querySelector("header").classList.toggle("desplegado");
  document.querySelector("span").classList.toggle("span__menu");
  document.querySelector("header").classList.toggle("mover");
  document.querySelector("body, html").classList.toggle("scroll");

});

btnMenus.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("header").classList.toggle("desplegado");
    document.querySelector("header").classList.toggle("mover");
    document.querySelector("span").classList.toggle("span__menu");
    document.querySelector("body, html").classList.toggle("scroll");

  });
});

ver.addEventListener("click", () => {

    ver.classList.add("d-none")
  contenido.textContent = "";

  Menu[0].forEach((item) => {
    const clone = template.content.cloneNode(true);

    clone.querySelector("img").setAttribute("src", item.url);
    clone.querySelector(".card-title").textContent = item.name;
    clone.querySelector(".card-text").textContent = item.description;

    fragment.appendChild(clone);


  });

  contenido.appendChild(fragment);
});
