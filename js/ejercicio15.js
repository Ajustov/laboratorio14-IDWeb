document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej15');
    const out = document.getElementById('out-ej15');

    class Usuario {
        constructor(nombre, email) { this.nombre = nombre; this.email = email; }
        mostrarInfo() { return `${this.nombre} <${this.email}>`; }
    }
    class Cliente extends Usuario {
        constructor(nombre, email, nivel) { super(nombre, email); this.nivel = nivel; }
        mostrarInfo() { return `Cliente: ${this.nombre} | Nivel: ${this.nivel}`; }
    }
    class Administrador extends Usuario {
        constructor(nombre, email, permisos) { super(nombre, email); this.permisos = permisos; }
        mostrarInfo() { return `Administrador: ${this.nombre} | Permisos: ${this.permisos.join(', ')}`; }
    }

    btn.addEventListener('click', () => {
        const usuarios = [
            new Cliente('Mario', 'mario@mail', 2),
            new Administrador('Laura', 'laura@mail', ['crear','eliminar']),
            new Cliente('Pedro', 'pedro@mail', 5)
        ];

        const lines = usuarios.map(u => u.mostrarInfo());
        out.textContent = lines.join('\n');
    });
});
