document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej18');
    const out = document.getElementById('out-ej18');

    class Producto {
        constructor(nombre, precio) { this.nombre = nombre; this.precio = Number(precio); }
    }

    class Carrito {
        constructor() { this.productos = []; }
        agregarProducto(producto) { this.productos.push(producto); }
        calcularTotal() { return this.productos.reduce((s, p) => s + p.precio, 0); }
        mostrarResumen() {
            const lineas = this.productos.map(p => `${p.nombre} - $${p.precio.toFixed(2)}`);
            lineas.push(`Total: $${this.calcularTotal().toFixed(2)}`);
            return lineas.join('\n');
        }
    }

    btn.addEventListener('click', () => {
        const carrito = new Carrito();
        carrito.agregarProducto(new Producto('Pan', 2.5));
        carrito.agregarProducto(new Producto('Leche', 4.2));
        carrito.agregarProducto(new Producto('Huevos', 6.0));
        out.textContent = carrito.mostrarResumen();
    });
});
