document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej10');
    const out = document.getElementById('out-ej10');

    function normalizarCalificaciones(arr) {
        if (!arr.length) return [];
        const max = Math.max(...arr);
        if (max === 0) return arr.map(() => 0);
        return arr.map(n => n / max);
    }

    btn.addEventListener('click', () => {
        const entrada = prompt('Ingrese las calificaciones separadas por comas (ej: 10,15,18):', '10,15,18');
        const arr = entrada.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
        const normalizadas = normalizarCalificaciones(arr);
        out.textContent =
`Calificaciones: [${arr.join(', ')}]
Máximo: ${Math.max(...arr)}
Normalizadas (0-1): [${normalizadas.map(n => n.toFixed(4)).join(', ')}]`;
    });
});
