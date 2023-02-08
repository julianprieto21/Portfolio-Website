document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
    if (!button.classList.contains('delete')) {
        button.classList.add('delete');
        setTimeout(() => button.classList.remove('delete'), 3200);
    }
    e.preventDefault();
}));

function mostrar_home() {
    let mostrar = document.getElementById("about-me");
    mostrar.style.display = "block";
    let ocultar = document.getElementById("more-about-me");
    ocultar.style.display = "none";
    ocultar = document.getElementById("experiencias");
    ocultar.style.display = "none";
    ocultar = document.getElementById("proyectos");
    ocultar.style.display = "none";
}
function mostrar_about() {
    let mostrar = document.getElementById("more-about-me");
    mostrar.style.display = "block";
    let ocultar = document.getElementById("about-me");
    ocultar.style.display = "none";
    ocultar = document.getElementById("experiencias");
    ocultar.style.display = "none";
    ocultar = document.getElementById("proyectos");
    ocultar.style.display = "none";
}
function mostrar_exp() {
    let mostrar = document.getElementById("experiencias");
    mostrar.style.display = "block";
    let ocultar = document.getElementById("about-me");
    ocultar.style.display = "none";
    ocultar = document.getElementById("more-about-me");
    ocultar.style.display = "none";
    ocultar = document.getElementById("proyectos");
    ocultar.style.display = "none";
}
function mostrar_pro() {
    let mostrar = document.getElementById("proyectos");
    mostrar.style.display = "block";
    let ocultar = document.getElementById("about-me");
    ocultar.style.display = "none";
    ocultar = document.getElementById("more-about-me");
    ocultar.style.display = "none";
    ocultar = document.getElementById("experiencias");
    ocultar.style.display = "none";
}