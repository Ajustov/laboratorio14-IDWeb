document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej9');
    const out = document.getElementById('out-ej9');

    function distanciaEntrePuntos(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function distanciaAlOrigen(x, y) {
        return Math.sqrt(x * x + y * y);
    }

    btn.addEventListener('click', () => {
        const x1 = parseFloat(prompt('Ingrese x1 (ej: 3):', '3'));
        const y1 = parseFloat(prompt('Ingrese y1 (ej: 4):', '4'));
        const x2 = parseFloat(prompt('Ingrese x2 (ej: 7):', '7'));
        const y2 = parseFloat(prompt('Ingrese y2 (ej: 1):', '1'));

        const d = distanciaEntrePuntos(x1, y1, x2, y2);
        const d1 = distanciaAlOrigen(x1, y1);
        const d2 = distanciaAlOrigen(x2, y2);

        out.textContent =
`Distancia entre (${x1}, ${y1}) y (${x2}, ${y2}) = ${d}
Distancia punto1 → origen = ${d1}
Distancia punto2 → origen = ${d2}
Suma distancias al origen = ${ (d1 + d2) }`;
    });
});
