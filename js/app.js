function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let botao = game.querySelector('.dashboard__item__button');
    let img = game.querySelector('.dashboard__item__img');

    if (botao.innerHTML === "Alugar"){
        botao.innerHTML = "Devolver";
        botao.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
    } else {
        botao.innerHTML = "Alugar";
        botao.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');
        
    }
}