document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej7');
    const out = document.getElementById('out-ej7');

    function gradosARadianes(grados) {
        return grados * (Math.PI / 180);
    }

    function radianesAGrados(radianes) {
        return radianes * (180 / Math.PI);
    }

    btn.addEventListener('click', () => {
        let grados = parseFloat(prompt("Ingrese valor en grados:"));
        let rad = gradosARadianes(grados);
        let sinVal = Math.sin(rad);
        let cosVal = Math.cos(rad);

        out.textContent = 
`Grados: ${grados}
Radianes: ${rad}
Seno: ${sinVal}
Coseno: ${cosVal}

Conversión inversa:
Radianes → Grados: ${radianesAGrados(rad)}`;
    });
});
