document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej6');
    const out = document.getElementById('out-ej6');

    btn.addEventListener('click', () => {
        let num = parseFloat(prompt("Ingrese un número:"));

        let cuadrado = Math.pow(num, 2);
        let cubo = Math.pow(num, 3);
        let raiz = Math.sqrt(num);

        out.textContent = 
`Número: ${num}
Cuadrado: ${cuadrado}
Cubo: ${cubo}
Raíz cuadrada: ${raiz}`;
    });
});
