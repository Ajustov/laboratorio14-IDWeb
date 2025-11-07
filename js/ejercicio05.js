document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej5');
    const out = document.getElementById('out-ej5');

    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    btn.addEventListener('click', () => {
        let dado1 = numeroAleatorio(1, 6);
        let dado2 = numeroAleatorio(1, 6);
        let suma = dado1 + dado2;

        out.textContent = `Dado 1: ${dado1}\nDado 2: ${dado2}\nSuma: ${suma}`;
    });
});
