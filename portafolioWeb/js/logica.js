const cambioTemas = () => {
    let elemento = document.querySelector(`#slcOpciones`);
    switch (Number(elemento.value)){
        case 1:
            document.body.classList.add("fondo-azul");
            document.body.classList.remove("fondo-gris");
            document.body.classList.remove("fondo-severaflor");
            localStorage.setItem("tema", "fondo-azul"); //lo guardamos en el localstorage para persistencia del cambio
            break;
        case 2:
            document.body.classList.add("fondo-gris");
            document.body.classList.remove("fondo-azul");
            document.body.classList.remove("fondo-severaflor");
            localStorage.setItem("tema", "fondo-gris");
            break;
        case 3:
            document.body.classList.add("fondo-severaflor");
            document.body.classList.remove("fondo-gris");
            document.body.classList.remove("fondo-azul");
            localStorage.setItem("tema", "fondo-severaflor");
            break; 
        default:
            document.body.classList.remove("fondo-azul");
            document.body.classList.remove("fondo-gris");
            document.body.classList.remove("fondo-severaflor");
            localStorage.removeItem("tema");
    }
}

function ocultarElemento(elemento,id) {
  const contenido = elemento.querySelector(`#${id}`);
  contenido.classList.toggle("oculto");
}

window.onload = function() { //cada vez que se cargue la pagina y haya un link a este js se cargara el tema en el localstorage si es que hay
  const temaGuardado = localStorage.getItem("tema");

  if (temaGuardado) {
    document.body.classList.add(temaGuardado);
  }
};