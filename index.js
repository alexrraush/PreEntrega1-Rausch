// CREAR UN USUARIO 
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



// aca esta el array con la lista de productos, nombre y precios
let ropaAccesorios = [
  
  {
    id: 1,
    nombre: "Buzo black life",
    precio: 38000,
  },
  {
    id: 2,
    nombre: "Buzo fire angel",
    precio: 28000,
  },
  {
    id: 3,
    nombre: "Buzo soft white",
    precio: 30000,
  },
  {
    id: 4,
    nombre: "Buzo liricals",
    precio: 50000,
  },
  {
    id: 5,
    nombre: "Gorra Lacoste",
    precio: 10000,
  },
];

// ACA VA A ESTAR EL CARRITO DONDE DESPUES SE VAN A PUSHEAR LOS PRODUCTOS INGRESADOS 
let carrito = []

function buscarRopa() {
  let elegir = prompt("Por favor, elija el nombre de los productos disponibles por el momento: (Buzo black life, Buzo fire angel, Buzo soft white, Buzo liricals, Gorra Lacoste)");

  let producto = ropaAccesorios.find((p) => p.nombre.toLowerCase() === elegir.toLowerCase());

  return producto;
}


function agregarProductosAlCarrito(producto) {
  if (producto) {
    let cantidadProductos = parseInt(prompt("Por favor, ingrese la cantidad de productos que desea comprar:"));
    carrito.push({
      producto: producto.nombre,
      cantidadProductos: cantidadProductos,
      subtotal: producto.precio * cantidadProductos
    });
  } else {
    alert("El producto seleccionado no existe.");
  }
}


function confirmarCarrito() {
  while (true) {
    let producto = buscarRopa();
    agregarProductosAlCarrito(producto);

    if (!confirm("Desea agregar otro producto al carrito?")) {
      break;
    }
  }
}
confirmarCarrito()