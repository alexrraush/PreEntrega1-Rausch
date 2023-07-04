let deseaCrearUsuario = confirm("¿Desea crear un usuario?")

if (deseaCrearUsuario) {
  let nombreUsuario = prompt("Ingrese su nombre de usuario:")
  let contraseña = prompt("Ingrese su contraseña:")

  if (nombreUsuario && contraseña) {
    alert("¡Usuario creado exitosamente!")
  } else {
    alert("No se proporcionaron datos de usuario. El proceso de creación de usuario ha sido cancelado.")
  }
} else {
  alert("Cancelando...")
}

let continuar = prompt("desea continuar? SI O NO")
do {

    if (continuar == "si") {
        alert("continuando..")
    }
    else if (continuar == "no") {
        alert("saliendo..")
    }else{
    continuar = prompt("respuesta incorrecta, porfavor ingrese una valida")
    }

}while(continuar !== "si" && continuar !== "no")

let avanzar = confirm("¿Desea añadir elementos a su carrito?");
let productos = "Buzos, anteojos, zapatillas, remeras";

function carrito(item) {
  switch (item) {
    case "buzos":
      alert("Usted ha añadido un buzo a su carrito.");
      break;

    case "anteojos":
      alert("Usted ha añadido unos anteojos a su carrito.");
      break;

    case "zapatillas":
      alert("Usted ha añadido unas zapatillas a su carrito.");
      break;

    case "remeras":
      alert("Usted ha añadido una remera a su carrito.");
      break;

    default:
      alert("La información proporcionada no es válida.");
      break;
  }
}

if (avanzar) {
  let elemento = prompt("Ingrese el elemento que desea añadir a su carrito:\n" + productos);

  if (elemento) {
    carrito(elemento.toLowerCase());
  } else {
    alert("No se proporcionó un elemento válido. El proceso de añadir elementos ha sido cancelado.");
  }
} else {
  alert("Cancelando...");
}