/*=========================================
            PORTFOLIO JAVASCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=============================
            LOADER
    =============================*/

    const loader = document.getElementById("loader");

    if (loader) {

        window.addEventListener("load", () => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 400);

        });

    }

    /*=============================
            MENÚ MÓVIL
    =============================*/

    const menuButton = document.getElementById("menu-toggle");

    const navMenu = document.querySelector(".nav-menu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", () => {

            navMenu.classList.toggle("active");

        });

    }

    /*=============================
        HEADER AL HACER SCROLL
    =============================*/

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /*=============================
        RESALTAR MENÚ ACTIVO
    =============================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*=============================
        EFECTO DE ESCRITURA
    =============================*/

    const subtitle = document.querySelector(".hero-subtitle");

    if (subtitle) {

        const text = subtitle.textContent;

        subtitle.textContent = "";

        let i = 0;

        function type() {

            if (i < text.length) {

                subtitle.textContent += text.charAt(i);

                i++;

                setTimeout(type, 60);

            }

        }

        type();

    }

    /*=============================
        CONTADORES
    =============================*/

    const counters = document.querySelectorAll(".stat-card h2");

    counters.forEach(counter => {

        const finalNumber = parseInt(counter.innerText);

        if (!isNaN(finalNumber)) {

            let value = 0;

            const interval = setInterval(() => {

                value++;

                counter.innerText = value;

                if (value >= finalNumber) {

                    clearInterval(interval);

                }

            }, 25);

        }

    });

});

/*=========================================
        BOTÓN VOLVER ARRIBA
=========================================*/

const button = document.createElement("button");

button.innerHTML = "↑";

button.id = "topButton";

document.body.appendChild(button);

button.style.position = "fixed";
button.style.right = "25px";
button.style.bottom = "25px";
button.style.width = "50px";
button.style.height = "50px";
button.style.borderRadius = "50%";
button.style.background = "black";
button.style.color = "white";
button.style.border = "none";
button.style.cursor = "pointer";
button.style.display = "none";
button.style.fontSize = "20px";
button.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        button.style.display = "block";

    } else {

        button.style.display = "none";

    }

});

button.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/*=========================================
        FOOTER AÑO AUTOMÁTICO
=========================================*/

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =

    `© ${new Date().getFullYear()} Paolo Ezio De Souza Ferreyra Romaní. Todos los derechos reservados.`;

}
