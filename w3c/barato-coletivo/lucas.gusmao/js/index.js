div_viagem = document.querySelector('#div_viagem')
sections = document.querySelectorAll("section")
fetch('https://playground.barato.com.br/desafio-front/api/offers')
  .then(ofertas => ofertas.json())
  .then(res => exibe(res))
function exibe(res){
    for(oferta of res){
        div_viagem.insertAdjacentHTML('beforeend',`
        <div class="col">
            <div id="offer-${oferta.id}" class="card card-block offer">
                <div class="offer-thumb" style="background-image: url(${oferta.image.url})"></div>
                <div class="offer-content p-4">
                    <div class="offer-title">${oferta.title}</div>
                    <div class="offer-price"><span>R$</span> ${Number(oferta.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                    <div class="offer-market-price"><span>R$</span> ${Number(oferta.market_price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                </div>
            </div>
        </div>`)}
}
for(section of sections){}
fetch('https://ifpb.github.io/challenges/web/front-end/js/barato-coletivo/code/data/categories.json')
    .then(catg => catg.json())

