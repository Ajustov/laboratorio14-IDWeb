document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej3');
    const out = document.getElementById('out-ej3');

    btn.addEventListener('click', () => {
        let precio = parseFloat(prompt("Ingrese el precio del producto: "));

        let abajo = Math.floor(precio);
        let arriba = Math.ceil(precio);
        let normal = Math.round(precio);

        out.textContent = 
`Precio original: ${precio}
Redondeo hacia abajo: ${abajo}
Redondeo hacia arriba: ${arriba}
Redondeo normal: ${normal}`;
    });
});

