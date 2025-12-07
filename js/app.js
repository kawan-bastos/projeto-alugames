function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let botao = game.querySelector('.dashboard__item__button');

    if (botao.innerHTML === "Alugar"){
        botao.innerHTML = "Devolver";
        botao.classList.add('dashboard__item__button--return');
    } else {
        botao.innerHTML = "Alugar";
        botao.classList.remove('dashboard__item__button--return');
        
    }
}