// Inicializa el carrito como un array vacío
let carrito = [];

// Función para mostrar el contenido del carrito
function mostrarContenidoCarrito() {
    let contenido = '';
    carrito.forEach(producto => {
        contenido += `${producto.nombre} - Cantidad: ${producto.cantidad}\n`;
    });
    return contenido;
}

function agregarAlCarrito(nombreProducto) {
    let productoExistente = carrito.find(producto => producto.nombre === nombreProducto);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre: nombreProducto, cantidad: 1 });
    }

    Swal.fire({
        icon: 'success',
        title: 'Producto añadido al carrito',
        text: `${nombreProducto} se ha añadido correctamente al carrito.`,
    });
}

document.getElementById('ver-carrito').addEventListener('click', function () {
    if (carrito.length === 0) {
        Swal.fire({
            icon: 'info',
            title: 'Carrito de Compras',
            text: 'El carrito está vacío.',
        });
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Carrito de Compras',
            text: mostrarContenidoCarrito(),
        });
    }
});

document.getElementById('borrar-carrito').addEventListener('click', function () {
    carrito = [];
    Swal.fire({
        icon: 'success',
        title: 'Carrito de Compras',
        text: 'El carrito se ha vaciado correctamente.',
    });
});

// Obtener productos desde un archivo JSON 
fetch('data.json') 
    .then(response => response.json())
    .then(data => {
        const contenedor = document.querySelector('.tarjetas');
        data.forEach(producto => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'card';
            tarjeta.style = 'width: 18rem;';
            tarjeta.innerHTML = `
                <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <button class="btn btn-primary" onclick="agregarAlCarrito('${producto.nombre}')">Añadir al carrito</button>
                </div>
            `;
            contenedor.appendChild(tarjeta);
        });
    })
    .catch(error => console.error('Error al obtener los productos:', error));