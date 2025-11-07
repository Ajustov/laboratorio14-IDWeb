document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej8');
    const out = document.getElementById('out-ej8');

    function generarPasswordNumerica() {
        let pass = '';
        for (let i = 0; i < 6; i++) {
            pass += Math.floor(Math.random() * 10);
        }
        return pass;
    }

    btn.addEventListener('click', () => {
        const password = generarPasswordNumerica();
        out.textContent = `Contraseña numérica (6 dígitos): ${password}`;
    });
});
