document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej13');
    const out = document.getElementById('out-ej13');

    class Figura {
        constructor() {}
        area() { throw new Error('area() no implementado'); }
        perimetro() { throw new Error('perimetro() no implementado'); }
    }

    class Cuadrado extends Figura {
        constructor(lado) { super(); this.lado = lado; }
        area() { return this.lado * this.lado; }
        perimetro() { return 4 * this.lado; }
    }

    class Triangulo extends Figura {

        constructor(base, altura, ladoA, ladoB, ladoC) {
            super();
            this.base = base;
            this.altura = altura;
            this.ladoA = ladoA; this.ladoB = ladoB; this.ladoC = ladoC;
        }
        area() { return (this.base * this.altura) / 2; }
        perimetro() { return this.ladoA + this.ladoB + this.ladoC; }
    }

    btn.addEventListener('click', () => {
        const c = new Cuadrado(5);
        const t = new Triangulo(6, 4, 3, 4, 5);
        out.textContent =
`Cuadrado (lado=5) -> Área: ${c.area()} | Perímetro: ${c.perimetro()}
Triángulo (base=6, altura=4, lados=3,4,5) -> Área: ${t.area()} | Perímetro: ${t.perimetro()}`;
    });
});
