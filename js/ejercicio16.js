document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej16');
    const out = document.getElementById('out-ej16');

    class Empleado {
        constructor(nombre, sueldoBase) { this.nombre = nombre; this.sueldoBase = Number(sueldoBase); }
        calcularSueldo() { return this.sueldoBase; }
    }

    class Programador extends Empleado {
        constructor(nombre, sueldoBase, lenguaje) { super(nombre, sueldoBase); this.lenguaje = lenguaje; }
        calcularSueldo() { return super.calcularSueldo() * 1.10; } // bono 10%
    }

    class ProgramadorSenior extends Programador {
        calcularSueldo() {
            // llamamos a super.calcularSueldo() (que aplica 10%) y lo ajustamos para obtener 25% total
            const baseCon10 = super.calcularSueldo(); // sueldoBase * 1.10
            const sueldoBase = baseCon10 / 1.10; // recuperamos sueldoBase
            return sueldoBase * 1.25; // aplicamos 25% total
        }
    }

    btn.addEventListener('click', () => {
        const p = new Programador('Carlos', 2000, 'JS');
        const s = new ProgramadorSenior('Marta', 3000, 'Java');
        out.textContent =
`Programador: ${p.nombre} -> Sueldo calculado: ${p.calcularSueldo()}
ProgramadorSenior: ${s.nombre} -> Sueldo calculado: ${s.calcularSueldo()}`;
    });
});

