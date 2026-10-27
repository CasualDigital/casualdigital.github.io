// Email de contacto de Casual Digital: se cambia acá y se actualiza en todas las páginas.
var EMAIL_CONTACTO = "casualdigitalorg@gmail.com";

(function () {
  var html = document.documentElement;
  var guardado = null;
  try { guardado = localStorage.getItem("idioma"); } catch (e) {}
  var idioma = guardado || ((navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en");
  html.setAttribute("data-lang", idioma);
  html.setAttribute("lang", idioma);

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".email").forEach(function (el) {
      el.textContent = EMAIL_CONTACTO;
      if (el.tagName === "A") el.href = "mailto:" + EMAIL_CONTACTO;
    });
    document.querySelectorAll(".anio").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
    var boton = document.querySelector(".idioma");
    if (boton) boton.addEventListener("click", function () {
      idioma = html.getAttribute("data-lang") === "es" ? "en" : "es";
      html.setAttribute("data-lang", idioma);
      html.setAttribute("lang", idioma);
      try { localStorage.setItem("idioma", idioma); } catch (e) {}
    });
  });
})();
