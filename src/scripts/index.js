import { screen } from "/src/scripts/objects/screen.js"
import { products  } from "/src/scripts/objects/products.js"

    
function inicializarLoja(){
    products.map((val) =>{
        screen.renderProducts(val)
    })
}

inicializarLoja()
function updateCart(){
    let counter = 0
    const counterContainer = document.querySelector('.cart')
    products.map(val => {
        if(val.amount > 0){
            counter += val.amount
            counterContainer.innerHTML = `<div class="contagem">
                                            <p>${counter}</p>
                                          </div>
                                            `
        }
    })
}



let buttonsCart = document.getElementsByTagName('button')
for(var i = 0; i < buttonsCart.length; i++){
    buttonsCart[i].addEventListener('click', function(){
        let key = this.getAttribute('key')
        products[key].amount++
        updateCart()
    })
}

const checkBoxDelivery = document.querySelector('#delivery')

checkBoxDelivery.addEventListener('change', () => {
    const cardProducts = document.querySelectorAll('.product')
    for (let i = 0; i < cardProducts.length; i++) {
        const divProduct = cardProducts[i]
        const product = products[i];
        const entrega = product.delivery
        if(checkBoxDelivery.checked){
            if(entrega === true){
                divProduct.style.display = 'block'
            } else{
                divProduct.style.display = 'none'
            }
        }else{
            divProduct.style.display = 'block'
        }
    }
})