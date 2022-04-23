
let lash_lifting = document.getElementById('lash_lifting');
let design_henna = document.getElementById('design_henna');
let epilacao_egipcia = document.getElementById('epilacao_egipcia');

let background_modal = document.getElementById('background_modal');
let modal = document.getElementById('modal');

let modal_text = document.getElementById('modal_text');

background_modal.classList.add("sumir");

modal_text.textContent = "";

lash_lifting.addEventListener("click", () => {
    modal_text.textContent = "Este procedimento consiste em CURVAR e ALONGAR OS CÍLIOS NATURALMENTE. Neste procedimento também é feito a tintura e nutrição, para potencializar ainda mais os cílios deixando com aspecto de rímel e nutrido para manter saudáveis.";
    background_modal.classList.remove("sumir");
})

design_henna.addEventListener("click", () => {
    modal_text.textContent = "O Design consiste em remodelar as sobrancelhas com pinça e finalizando com a linha, de uma forma que valoriza o olhar e realçar a sua beleza natural, trazendo equilíbrio e simetria adequada. A Henna tem a função de corrigir pequenas falhas, alongar e realçar as sobrancelhas.";
    background_modal.classList.remove("sumir");
})

epilacao_egipcia.addEventListener("click", () => {
    modal_text.textContent = "A técnica da epilação egípcia consiste na remoção dos pelos através de uma linha 100% algodão, elimina os fios pequenos e até a penugem bem fina, que costuma aparecer na testa, buço, queixo e maçãs do rosto.";
    background_modal.classList.remove("sumir");
})

background_modal.addEventListener("click", () => {
    background_modal.classList.add("sumir");
})

modal.addEventListener("click", () => {
    modal.classList.remove("sumir");
})