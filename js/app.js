function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`); // seleciona o jogo com base no id recebido
    let botao = game.querySelector('.dashboard__item__button'); // seleciona o botao dentro do jogo selecionado 
    // obs: caso remova a classe padrao ao clicar, vai acontecer do botao perder a funcionalidade, entao apenas adicione o novo estilo sem remover a classe padrao
    
    let img = game.querySelector('.dashboard__item__img'); // seleciona a imagem dentro do jogo selecionado

    if (botao.innerHTML === "Alugar"){ // toda vez que o botao tiver "Alugar", ao clicar ele deve mudar para "Devolver"
        botao.innerHTML = "Devolver";
        botao.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
    } else { // toda vez que o botao tiver "Devolver", ao clicar ele deve mudar para "Alugar"
        botao.innerHTML = "Alugar";
        botao.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');  
        
    }
}