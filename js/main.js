// const productos = [];

// class Componente{
//     constructor(id, tipo, modelo, marca, precio){
//         this.id= id;
//         this.tipo= tipo;
//         this.modelo= modelo;
//         this.marca= marca;
//         this.precio= precio;
//     }
// };
// const primerComponente = new Componente("1", "Placa de video", "AMD RX 7600", "ASUS", 395000);
// const segundoComponente = new Componente("2", "Procesador", "AMD Ryzen 5 5600x", "AMD", 275000);
// const tercerComponente = new Componente("3", "Motherboard", "ASUS PRIME B550", "ASUS", 141000);
// const cuartoComponente = new Componente("4", "Disco Sólido", "WD Black SN770", "Western Digital", 78810);
// const quintoComponente = new Componente("5", "Memoria RAM", "Fury Beast", "Kingston", 29900);
// productos.push(primerComponente);
// productos.push(segundoComponente);
// productos.push(tercerComponente);
// productos.push(cuartoComponente);
// productos.push(quintoComponente);

// console.log(productos);


// CATÁLOGO CARDS //
const productos = [
    {
        id: 1,
        tipo: "Placa de Video",
        modelo: "ASUS AMD RX 7600",
        imagen: './assets/img/RX7600.jpg',
        precio: 395000,
    },
    {
        id: 2,
        tipo: "Procesador",
        modelo: "AMD Ryzen 5600X",
        imagen: './assets/img/5600x.jpg',
        precio: 275000,
    },
    {
        id: 3,
        tipo: "Motherboard",
        modelo: "ASUS PRIME B550",
        imagen: './assets/img/motherB550.jpg',
        precio: 141000,
    },
    {
        id: 4,
        tipo: "Disco Sólido",
        modelo: "WD Black SN770 500GB",
        imagen: './assets/img/ssdSN770.png',
        precio: 78810,
    },
    {
        id: 5,
        tipo: "Memoria RAM",
        modelo: "Kingston Fury Beast 16GB",
        imagen: './assets/img/RAMfury.jpg',
        precio: 29900,
    },
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const catalogo = document.getElementById("catalogo");

function crearCard(producto) {
    const card = document.createElement("div");
    card.className = "producto";
    
    const tipo = document.createElement("p");
    tipo.innerText = producto.tipo;

    const modelo = document.createElement("p");
    modelo.innerText = producto.modelo;
    
    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.className = "productoContenido";

    const precio = document.createElement("p");
    precio.innerText = `Precio: $${producto.precio}`;

    const botonAgregarAlCarrito = document.createElement("button");
    botonAgregarAlCarrito.innerText = "Agregar al carrito";
    botonAgregarAlCarrito.className = "agregarAlCarritoBoton";
    botonAgregarAlCarrito.addEventListener("click", () => agregarAlCarrito(producto));
    
    card.append(tipo);
    card.append(modelo);
    card.append(imagen);
    card.append(precio);
    card.append(botonAgregarAlCarrito);
    
    catalogo.append(card);
}

function verCarrito() {
    const carritoContenedor = document.getElementById('carritoContenedor');
    carritoContenedor.innerHTML = "";

    if (carrito.length === 0) {
        const mensajeVacio = document.createElement('h1');
        mensajeVacio.innerText = 'Tu carrito está vacío';
        mensajeVacio.className = 'mostrarCarritoTexto';
        carritoContenedor.append(mensajeVacio);
    } else {
        const lista = document.createElement('div');
        lista.className = 'mostrarCarritoTexto';
        
        const titulo = document.createElement('h1');
        titulo.innerText = 'Este es tu carrito actual:';
        lista.append(titulo)

        carrito.forEach((producto) => {
            const itemCarrito = document.createElement('p');
            itemCarrito.innerText = `${producto.tipo} ${producto.modelo} - Precio: $${producto.precio}`;
            itemCarrito.className = 'mostrarCarritoTexto';
            lista.append(itemCarrito);
        });

        carritoContenedor.append(lista);
    }
}

function limpiarCarrito() {
    carrito = [];
    localStorage.removeItem('carrito');
    verCarrito();
}

const botonVerCarrito = document.createElement("button");
botonVerCarrito.innerText = "Ver Carrito";
botonVerCarrito.className = "mostrarCarritoBoton";
botonVerCarrito.addEventListener("click", verCarrito);
document.body.append(botonVerCarrito);

console.log(carrito);

const botonLimpiarCarrito = document.createElement("button");
botonLimpiarCarrito.innerText = "Limpiar Carrito";
botonLimpiarCarrito.className = "mostrarCarritoBoton";
botonLimpiarCarrito.addEventListener("click", limpiarCarrito);
document.body.append(botonLimpiarCarrito);

productos.forEach(el => crearCard(el));