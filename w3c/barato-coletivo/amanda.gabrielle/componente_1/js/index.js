function getoffers(link){
    fetch(link)
    .then(response => response.json())
    .then(offers => exibirpromo(offers))
}

function exibirpromo(offers){
    let result = ``
    for(oferta of offers){
        let elemento = `
        <div class="col">
            <div id="offer-${oferta.id}" class="card card-block offer">
                <div class="offer-thumb" style="background-image: url(${oferta.image.url})"></div>
                <div class="offer-content p-4">
                <div class="offer-title">${oferta.title}</div>
                <div class="offer-price"><span>R$</span> ${Number(oferta.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                <div class="offer-market-price"><span>R$</span> ${Number(oferta.market_price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                </div>
            </div>
        </div>`
        result+=elemento
    }
    card.innerHTML += result
}

let card = document.querySelector('.row')

getoffers('https://playground.barato.com.br/desafio-front/api/offers')