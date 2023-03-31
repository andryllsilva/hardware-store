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


function checkDelivery(){
    const cardProducts = document.querySelectorAll('.product')
    const checkBoxDelivery = document.querySelector('#promotion')
    for (let i = 0; i < cardProducts.length; i++) {
        const product = cardProducts[i];
        const entrega = document.querySelector('.entrega-gratis').textContent
        console.log(entrega)
        if(checkBoxDelivery.checked){
            if(entrega === 'Entrega grátis'){
                product.style.display = 'block'
            } else{
                product.style.display = 'none'
            }
        }else{
            product.style.display = 'block'
        }
    }
}

checkDelivery()