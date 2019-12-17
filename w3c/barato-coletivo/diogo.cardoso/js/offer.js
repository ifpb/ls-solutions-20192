const cont = document.querySelector('.container')
const url = new URL(location)
const offerId = url.searchParams.get('offer')

fetch(`../data/offer/${offerId}.json`)
    .then(res => res.json())
    .then(json => show(json))
function insertImage(itens){
    let aux = ``

    for (index in itens){
        let image = itens[index]
        const active = index == 0 ? ' active' : ''
        aux += `<div class="carousel-item${active}">
            <img src="${image.url}" class="d-block w-100" alt="Imagem da Oferta">
        </div>
        `
    }
    return aux
}
function show(oferta){
    let price = Number(oferta.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    let market_price = Number(oferta.market_price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    let desconto = Number(oferta.market_price - oferta.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    let add = `<h1 class="pt-4 pb-2 mb-4 border-bottom">${oferta.title}</h1>
        <div class="row">
            <div class="col-7">
                <div id="carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        ${insertImage(oferta.images)}    
                    </div>
                    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="col-5 text-center pt-5 offer-values">
                <p class="m-0 offer-option">Opções a partir de</p>
                <p class="m-0 offer-price"><span style="font-size: 1.5rem;">R$</span>${price}</p>
                
                ${market_price != price ? `<p class="m-0 offer-market-price">de <span>R$</span> ${market_price}</p>
                    <p class="offer-discount-value">Economize <b>R$ ${desconto}</b></p>
                    <a href="#" class="btn btn-warning btn-lg px-5 mb-5">Escolher opção</a>
                    <p class="offer-discount-percent">${(100*(oferta.market_price - oferta.price)/oferta.market_price).toFixed(0)}% de desconto</p>
                    ` : '<a href="#" class="btn btn-warning btn-lg px-5 mb-5">Escolher opção</a>'}
                </div>
        </div>
        <div class="row">
            <div class="col">
                <h2 class="mt-5 mb-3">Detalhes da Oferta</h2>
                <p class="offer-description">
                ${oferta.description}
                </p>
            </div>
        </div>`
    cont.insertAdjacentHTML('beforeend', add)
}