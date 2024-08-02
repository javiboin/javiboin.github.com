// Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

// recorrerlos

links.forEach(function(link){

    // Agregar un evento click a cada uno de ellos
    // existe un corportamiento por defecto dentro de los eventos de esta manera lo detenemos
    link.addEventListener("click", function(ev){
        ev.preventDefault();

        let content = document.querySelector(".content");

        // Quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeInDown");

        // Agregar clases para animar su salida
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutUp");

        // Redireccionarnos a la pag principal el index
        setTimeout(function(){
            location.href = "/";
        }, 1000);

        return false;
    })
});

/* agregar o quitar clases de un elemento js
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star");
    icono.classList.add("fa-star");
}) */
