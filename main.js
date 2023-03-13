document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
    if (!button.classList.contains('delete')) {
        button.classList.add('delete');
        setTimeout(() => button.classList.remove('delete'), 3200);
    }
    e.preventDefault();
}));

const aboutMe = document.getElementById("about-me");
const moreAboutMe = document.getElementById("more-about-me");
const experience = document.getElementById("experiencias");
const projects = document.getElementById("proyectos");

function mostrar_home() {
    aboutMe.style.display = "block";
    moreAboutMe.style.display = "none";
    experience.style.display = "none";
    projects.style.display = "none";
}
function mostrar_about() {
    aboutMe.style.display = "none";
    moreAboutMe.style.display = "block";
    experience.style.display = "none";
    projects.style.display = "none";
}
function mostrar_exp() {
    aboutMe.style.display = "none";
    moreAboutMe.style.display = "none";
    experience.style.display = "block";
    projects.style.display = "none";
}
function mostrar_pro() {
    aboutMe.style.display = "none";
    moreAboutMe.style.display = "none";
    experience.style.display = "none";
    projects.style.display = "block";
}