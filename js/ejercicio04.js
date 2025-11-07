document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej4');
    const out = document.getElementById('out-ej4');

    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    btn.addEventListener('click', () => {
        let min = parseInt(prompt("Ingrese el minimo: "));
        let max = parseInt(prompt("Ingrese el maximo: "));

        let resultado = numeroAleatorio(min, max);

        out.textContent = `Número aleatorio generado: ${resultado}`;
    });
});
