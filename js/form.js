function ingresarInformacion(){
    let nombre = document.getElementById("nombre").value;
    let mail = document.getElementById("mail").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    if(nombre === ""){
        alert("Porfavor ingresa el nombre en el formulario");
    }else if(mail === ""){
        alert("Porfavor ingresa el Email en el formulario");
    }else if(asunto === ""){
        alert("Porfavor ingresa el asunto en el formulario");
    }else if(mensaje === ""){
        alert("Porfavor ingresa el mensaje en el formulario");
    }
    else{
        console.log("Nombre:" + nombre);
        console.log("Email:" + mail);
        console.log("Asunto:" + asunto);
        console.log("Mensaje:" + mensaje);
    }
}

const vaciarCampos = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";
}