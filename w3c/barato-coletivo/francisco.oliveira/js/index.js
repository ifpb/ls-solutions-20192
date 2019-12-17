const showview = document.querySelector('#hoteis .row')

fetch('https://ifpb.github.io/challenges/web/front-end/js/barato-coletivo/code/data/offers.json')
            .then(res => res.json())
            .then(json => show(json))

function show(jjson){
    for(i of jjson){
        let view = `<div class="col">
                    <div id="offer-${i.id}" class="card card-block offer">
                        <div class="offer-thumb" style="background-image: url(${i.image.url})"></div>
                            <div class="offer-content p-4">
                                <div class="offer-title">${i.title}</div>
                                    <div class="offer-price"><span>R$</span>${Number(i.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                                        <div class="offer-market-price"><span>R$</span>${i.market_price}</div>                            
                            </div>
                    </div>
                    </div>
    `
    showview.insertAdjacentHTML('beforeend', view)
    }
}
