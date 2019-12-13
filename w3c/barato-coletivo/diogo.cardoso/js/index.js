const hoteis = document.querySelector('#hoteis .row')
const gastronomia = document.querySelector('#gastronomia .row')
const tortas = document.querySelector('#tortas .row')
const entretenimento = document.querySelector('#entretenimento .row')
const saude = document.querySelector('#saude .row')
const servicos = document.querySelector('#servicos .row')

const categories = []

fetch('../data/categories.json')
    .then(req => req.json())
    .then(json => categorias(json))

function categorias(json){
    categories.push(json)

    fetch('../data/offers.json')
    .then(req => req.json())
    .then(json => show(json))
}
function show(json) {
    for (oferta of json) {
        for (cat of categories){
            if (cat[oferta.id] == 'hoteis'){
                adicionar(oferta, hoteis) 
            }
            
            else if (cat[oferta.id] == 'gastronomia'){
                adicionar(oferta, gastronomia) 
            }

            else if (cat[oferta.id] == 'tortas'){
                adicionar(oferta, tortas) 
            }

            else if (cat[oferta.id] == 'entretenimento'){
                adicionar(oferta, entretenimento) 
            }

            else if (cat[oferta.id] == 'saude'){
                adicionar(oferta, saude) 
            }
            
            else if (cat[oferta.id] == 'servicos'){
                adicionar(oferta, servicos) 
            }
        }  
    }
}
function adicionar(oferta, row) {
    let price = Number(oferta.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    let market_price = Number(oferta.market_price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })

    let add = `<div class="col">
            <div id="offer-${oferta.id}" class="card card-block offer">
                <div class="offer-thumb" style="background-image: url(${oferta.image.url})"></div>
                <div class="offer-content p-4">
                    <div class="offer-title">${oferta.description}</div>
                    <div class="offer-price"><span>R$</span> ${price}</div>
                    <div class="offer-market-price"><span>R$</span> ${market_price}</div>
                </div>
            </div>
        </div>`

    row.insertAdjacentHTML('beforeend', add)


}