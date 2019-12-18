function getOrfer(url){
    fetch(url)
    .then(res => res.json())
    .then (json => exibir(json))
}

function priceBr(valor){
    return (Number(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 }))
}

function exibir(orfer){

    const areaOrfer = document.querySelector('.row')

    result=''
    for(i of orfer){
        i.price=priceBr(i.price)
        i.market_price=priceBr(i.market_price)
        result+= `<div class="col">
                    <div id="offer-${i.id}" class="card card-block offer">
                        <div class="offer-thumb" style="background-image: url(${i.image.url})"></div>
                        <div class="offer-content p-4">
                        <div class="offer-title">${i.title}</div>
                        <div class="offer-price"><span>R$</span> ${i.price}</div>
                        <div class="offer-market-price"><span>R$</span> ${i.market_price}</div>
                        </div>
                    </div>    
                </div>`
    }
    areaOrfer.innerHTML=result
}    

exibir(getOrfer('https://playground.barato.com.br/desafio-front/api/offers'))