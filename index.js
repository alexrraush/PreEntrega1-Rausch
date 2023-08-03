// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto) {
    // Verificar si ya hay un carrito en el sessionStorage
    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    let productoExistente = carrito.find(producto => producto.nombre === nombreProducto);

    if (productoExistente) {
        // Si el producto ya existe en el carrito, aumentar la cantidad
        productoExistente.cantidad++;
    } else {
        // Si el producto no existe en el carrito, agregarlo
        carrito.push({ nombre: nombreProducto, cantidad: 1 });
    }

    // Actualizar el carrito en el sessionStorage
    sessionStorage.setItem('carrito', JSON.stringify(carrito));

    // Mostrar una alerta de que el producto se ha añadido al carrito
    Swal.fire({
        icon: 'success',
        title: 'Producto añadido al carrito',
        text: `${nombreProducto} se ha añadido correctamente al carrito.`,
    });
}

// Función para mostrar el contenido del carrito cuando se hace clic en el botón "Ver Carrito"
document.getElementById('ver-carrito').addEventListener('click', function () {
    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        Swal.fire({
            icon: 'info',
            title: 'Carrito de Compras',
            text: 'El carrito está vacío.',
        });
    } else {
        let contenido = '';
        carrito.forEach(producto => {
            contenido += `${producto.nombre} - Cantidad: ${producto.cantidad}\n`;
        });

        Swal.fire({
            icon: 'info',
            title: 'Carrito de Compras',
            text: contenido,
        });
    }
});

// Función para eliminar todos los productos del carrito de compras
function borrarCarrito() {
    // Eliminar el carrito del sessionStorage
    sessionStorage.removeItem('carrito');

    // Mostrar un mensaje de éxito usando Swal para confirmar que el carrito se ha vaciado
    Swal.fire({
        icon: 'success',
        title: 'Carrito de Compras',
        text: 'El carrito se ha vaciado correctamente.',
    });
}

// Agregar escuchadores de eventos de clic a los botones
document.getElementById('ver-carrito').addEventListener('click', function () {
    // ... (código existente para mostrar el contenido del carrito)
});

document.getElementById('borrar-carrito').addEventListener('click', function () {
    // Llamar a la función para borrar el carrito
    borrarCarrito();
});