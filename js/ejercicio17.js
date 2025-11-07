document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej17');
    const out = document.getElementById('out-ej17');

    class Cuenta {
        #saldo;
        constructor(saldoInicial = 0) { this.#saldo = Number(saldoInicial); }
        depositar(monto) {
            if (Number(monto) <= 0) throw new Error('Monto debe ser > 0');
            this.#saldo += Number(monto);
        }
        retirar(monto) { throw new Error('retirar() debe implementarse en la subclase'); }
        getSaldo() { return this.#saldo; }
        transferir(destino, monto) {
            if (!(destino instanceof Cuenta)) throw new Error('Destino inválido');
            this.retirar(monto);
            destino.depositar(monto);
        }
    }

    class CuentaAhorro extends Cuenta {
        retirar(monto) {
            monto = Number(monto);
            if (monto <= 0) throw new Error('Monto inválido');
            if (monto > this.getSaldo()) throw new Error('Saldo insuficiente en CuentaAhorro');
            // usar depositar con negativo para mantener encapsulación
            this.depositar(-monto);
        }
    }

    class CuentaCorriente extends Cuenta {
        constructor(saldoInicial = 0, limiteSobregiro = 500) {
            super(saldoInicial);
            this.limite = Number(limiteSobregiro);
        }
        retirar(monto) {
            monto = Number(monto);
            if (monto <= 0) throw new Error('Monto inválido');
            if (this.getSaldo() - monto < -this.limite) throw new Error('Excede límite de sobregiro');
            this.depositar(-monto);
        }
    }

    btn.addEventListener('click', () => {
        try {
            const ahorro = new CuentaAhorro(1000);
            const corriente = new CuentaCorriente(200, 300);
            ahorro.transferir(corriente, 300); // 1000-300, corriente 200+300
            corriente.retirar(450); // permite sobregiro hasta -100 (200+300-450 = 50)
            out.textContent =
`CuentaAhorro saldo: ${ahorro.getSaldo()}
CuentaCorriente saldo: ${corriente.getSaldo()}`;
        } catch (e) {
            out.textContent = `Error: ${e.message}`;
        }
    });
});
