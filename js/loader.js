document.addEventListener("DOMContentLoaded", function() {
    // Carregar Header
    fetch("components/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
            setActiveLink();
            initMobileMenu(); // Inicializa o hamburguer
        });

    // Carregar Footer
    fetch("components/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
});

function initMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu");
    const navList = document.getElementById("nav-list");

    if (menuBtn && navList) {
        menuBtn.addEventListener("click", () => {
            navList.classList.toggle("active");
            // Muda o ícone de barras para X ao abrir
            const icon = menuBtn.querySelector("i");
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        });
    }
}

function setActiveLink() {
    let page = window.location.pathname.split("/").pop();
    if (page === "" || page === "index.html") document.getElementById("link-home")?.classList.add("active");
    if (page === "about.html") document.getElementById("link-about")?.classList.add("active");
    if (page === "projects.html") document.getElementById("link-projects")?.classList.add("active");
    if (page === "curricullum.html") document.getElementById("link-curricullum")?.classList.add("active");
    if (page === "contact.html") document.getElementById("link-contact")?.classList.add("active");
}