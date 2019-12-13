function GetOfertas(url){
    fetch(url)
    .then(res=>res.json())
    .then(json=>print(json))
}

function print(js){
    let result =''
    for (let off of js){
        off.price=Number(off.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
        off.market_price=Number(off.market_price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
        
        result+=`<div class="col">
            <div id="offer-${off.id}" class="card card-block offer">
                <div class="offer-thumb" style="background-image: url(${off.image.url})"></div>
                <div class="offer-content p-4">
                    <div class="offer-title">${off.description}</div>
                    <div class="offer-price"><span>R$</span> ${off.price}</div>
                    <div class="offer-market-price"><span>R$</span> ${off.market_price}</div>
                </div>
                </div>
        </div>
        `
    }
    index.innerHTML=result
}

const index=document.querySelector('.row')

GetOfertas('https://playground.barato.com.br/desafio-front/api/offers')

