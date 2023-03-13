window.onload = () => {
    // Guardando a tag h1 na variável
    const h1 = document.querySelector('#msg');
    // Chamando o objeto Date
    const horario = new Date();
    
    // Pegando a hora, minuto e segundo
    let h = horario.getHours();
    let min = horario.getMinutes();
    let seg = horario.getSeconds();

    // Pegando os elementos do relógio
    const hora = document.querySelector('.hora');
    const minuto = document.querySelector('.minuto');
    const segundo = document.querySelector('.segundo');

    hora.innerHTML = h < 10 ? '0' + h: h;
    minuto.innerHTML = min < 10 ? '0' + min : min;
    segundo.innerHTML = seg < 10 ? '0' + seg : seg;

    // Função para atualizar o contador
    setInterval(() => {
        seg++;
        seg = seg < 10 ? '0' + seg : seg;

        if (seg > 59) {
            seg = '00';

            min++;
            min = min < 10 ? '0' + min : min;

            if (min > 59) {
                min = '00';

                h++;
                h = h < 10 ? '0' + h: h;

                if (h > 23) {
                    h = '00';
                }
                hora.innerHTML = h;
            }

            minuto.innerHTML = min;
        }
        segundo.innerHTML = seg;

        // Atualizando a mensagem
        if (h >= 5 && h < 12) {
            h1.innerHTML = 'Bom dia!';
        } else if (h >= 12 && h < 18) {
            h1.innerHTML = 'Boa tarde!';
        } else if (h >= 18 < h < 23) {
            h1.innerHTML = 'Boa noite!';
        } else {
            h1.innerHTML = 'Boa madrugada!';
        }

    }, 1000);
}
