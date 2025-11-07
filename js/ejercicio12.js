document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej12');
    const out = document.getElementById('out-ej12');

    class Producto {
        #nombre;
        #precio = 0;

        constructor(nombre, precio) {
            this.#nombre = nombre;
            this.precio = precio;
        }

        set precio(v) {
            const n = Number(v);
            if (isNaN(n) || n < 0) throw new Error('Precio inválido');
            this.#precio = n;
        }

        get precio() {
            return `$${this.#precio.toFixed(2)}`;
        }

        info() {
            return `Producto: ${this.#nombre}\nPrecio formateado: ${this.precio}`;
        }
    }

    btn.addEventListener('click', () => {
        try {
            const p = new Producto('Cuaderno', '120.5'); // string aceptado
            const antes = p.info();
            p.precio = 99; // número aceptado
            const despues = p.info();
            out.textContent = `${antes}\n\nDespués de setPrecio(99):\n${despues}`;
        } catch (e) {
            out.textContent = `Error: ${e.message}`;
        }
    });
});
