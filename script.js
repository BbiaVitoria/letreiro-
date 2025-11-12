/* script.js - O CSS já faz a maior parte do trabalho, mas podemos usar JS
 * para controlar a velocidade ou o texto dinamicamente. */

const marquee = document.getElementById('marquee');
const screenArea = document.querySelector('.screen-area');

// g. Controle a velocidade do letreiro:
// A velocidade é inversamente proporcional à duração da animação em CSS.
// Um valor menor = mais rápido. Um valor maior = mais lento.
let speedFactor = 10; // Duração em segundos

// Função para atualizar a velocidade (duração da animação)
function setMarqueeSpeed(newDurationSeconds) {
    marquee.style.animationDuration = `${newDurationSeconds}s`;
}

// 1. Defina a velocidade inicial
setMarqueeSpeed(speedFactor); 

// Exemplo de como você poderia mudar a velocidade (por exemplo, após 5 segundos)
/*
setTimeout(() => {
    console.log("Aumentando a velocidade para 5s de duração!");
    setMarqueeSpeed(5); 
}, 5000);
*/

// O CSS com `animation-direction: alternate;` já cuida de:
// a. O letreiro deve deslizar até o outro lado da tela mas, quando chegar lá, ele deve voltar.
// b. Iniciando da esquerda para a direita. 
// O JavaScript só seria necessário se quiséssemos um controle mais complexo que não pudesse ser feito
// facilmente com CSS Keyframes e `alternate`.