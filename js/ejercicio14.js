document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej14');
    const out = document.getElementById('out-ej14');

    class Usuario {
        constructor(nombre, email) { this.nombre = nombre; this.email = email; }
        mostrarInfo() { return `Nombre: ${this.nombre} | Email: ${this.email}`; }
    }

    class Cliente extends Usuario {
        constructor(nombre, email, nivelFidelidad) {
            super(nombre, email);
            this.nivelFidelidad = Math.max(1, Math.min(5, Number(nivelFidelidad || 1)));
        }
        mostrarInfo() {
            return `Cliente -> ${super.mostrarInfo()} | Nivel fidelidad: ${this.nivelFidelidad}`;
        }
    }

    class Administrador extends Usuario {
        constructor(nombre, email, permisos = []) {
            super(nombre, email);
            this.permisos = permisos;
        }
        mostrarInfo() {
            return `Administrador -> ${super.mostrarInfo()} | Permisos: ${this.permisos.join(', ')}`;
        }
    }

    btn.addEventListener('click', () => {
        const c = new Cliente('Ana', 'ana@mail.com', 4);
        const a = new Administrador('Luis', 'luis@mail.com', ['crear','editar','eliminar']);
        out.textContent = `${c.mostrarInfo()}\n${a.mostrarInfo()}`;
    });
});
