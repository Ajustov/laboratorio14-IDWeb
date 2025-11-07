document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej11');
    const out = document.getElementById('out-ej11');
    class Producto {
        #nombre;
        #precio;
        #stock;
        constructor(nombre, precio, stock) {
            this.#nombre = nombre;
            this.setPrecio(precio);
            this.setStock(stock);
        }
        setPrecio(v) {
            const n = Number(v);
            if (!isNaN(n) && n > 0) this.#precio = n;
            else throw new Error('Precio debe ser número > 0');
        }
        setStock(v) {
            const n = Number(v);
            if (!isNaN(n) && n >= 0) this.#stock = n;
            else throw new Error('Stock debe ser número >= 0');
        }
        vender(cantidad) {
            const c = Number(cantidad);
            if (isNaN(c) || c <= 0) throw new Error('Cantidad inválida');
            if (c > this.#stock) return false;
            this.#stock -= c;
            return true;
        }
        info() {
            return `Producto: ${this.#nombre}\nPrecio(raw): ${this.#precio}\nStock: ${this.#stock}`;
        }
    }
    btn.addEventListener('click', () => {
        try {
            const p = new Producto('Arroz', 12.5, 20);
            const antes = p.info();
            const ok = p.vender(5);
            const despues = p.info();
            out.textContent = `${antes}\n\nvender(5) -> ${ok}\n\n${despues}`;
        } catch (e) {
            out.textContent = `Error: ${e.message}`;
        }
    });
});
