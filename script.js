document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona os elementos
    const marquee = document.getElementById('marquee');
    const container = document.getElementById('screen-container');

    // 2. Variáveis de estado da animação
    let position = container.clientWidth; // (b) Começa da extrema direita (fora)
    let direction = -1; // -1 para mover para a esquerda, 1 para mover para a direita
    const speed = 2; // Velocidade de deslocamento (pixels por frame)

    // 3. Função de animação
    function animateMarquee() {
        // (a) Lógica de movimento e inversão de direção

        // Verifica a largura do container e do letreiro
        const containerWidth = container.clientWidth;
        const marqueeWidth = marquee.clientWidth;

        // Se a direção for para a esquerda (-1)
        if (direction === -1) {
            // Move a posição
            position += direction * speed;

            // Condição para inverter: Se a borda direita do letreiro (position + marqueeWidth) tocar na borda esquerda do container (0)
            if (position + marqueeWidth < 0) {
                // Inverte a direção para a direita
                direction = 1;
            }
        } 
        // Se a direção for para a direita (1)
        else {
            // Move a posição
            position += direction * speed;

            // Condição para inverter: Se a borda esquerda do letreiro (position) tocar na borda direita do container (containerWidth)
            if (position > containerWidth) {
                // Inverte a direção para a esquerda
                direction = -1;
            }
        }

        // Aplica a nova posição ao elemento (movimento no eixo horizontal)
        marquee.style.left = `${position}px`;

        // Chama a função novamente no próximo quadro de animação
        requestAnimationFrame(animateMarquee);
    }

    // 4. Inicia a animação
    animateMarquee();
});