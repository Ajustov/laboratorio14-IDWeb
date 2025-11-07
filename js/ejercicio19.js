document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej19');
    const out = document.getElementById('out-ej19');

    class Notificacion {
        enviar() { return 'Notificación base'; }
    }
    class Email extends Notificacion {
        constructor(destino, asunto) { super(); this.destino = destino; this.asunto = asunto; }
        enviar() { return `Email -> To: ${this.destino} | Asunto: ${this.asunto}`; }
    }
    class SMS extends Notificacion {
        constructor(destino, mensaje) { super(); this.destino = destino; this.mensaje = mensaje; }
        enviar() { return `SMS -> To: ${this.destino} | Msg: ${this.mensaje}`; }
    }
    class Push extends Notificacion {
        constructor(usuario, mensaje) { super(); this.usuario = usuario; this.mensaje = mensaje; }
        enviar() { return `Push -> Usuario: ${this.usuario} | Msg: ${this.mensaje}`; }
    }

    function procesarNotificaciones(lista) {
        return lista.map(n => n.enviar());
    }

    btn.addEventListener('click', () => {
        const lista = [
            new Email('a@mail.com', 'Bienvenido'),
            new SMS('+51999999999', 'Codigo: 1234'),
            new Push('usuario_1', 'Tu pedido ha llegado')
        ];
        out.textContent = procesarNotificaciones(lista).join('\n');
    });
});
