const screen = {
    productContainer: document.querySelector('.product-container'),
    renderProducts(val){
        if(val.delivery == true){
            this.productContainer.innerHTML += `<div class="product">        
                                            <a href="/">
                                                <img src="./src/images/${val.image}" alt="placa de video">
                                                <div class="nome-produto">
                                                    <h2>${val.name}</h2>
                                                </div>
                                                <div class="price">
                                                    <div class="oldprice">
                                                        <span class="oldpricecard">${val.oldPrice}</span>
                                                        <span class="desconto cor-venda">${val.discount}</span>
                                                    </div>
                                                    <div class="newprice">
                                                        <span class="pricecard cor-venda">R$ ${val.newPrice}</span>
                                                        <p class="entrega-gratis cor-venda">Entrega grátis</p>
                                                        <p>${val.description}</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="btn-cart">
                                                <button key="${val.id}" class="button-cart">Adicionar ao carrinho</button>
                                            </div>
                                        </div>`
        }else{
            this.productContainer.innerHTML += `<div class="product">        
                                            <a href="/">
                                                <img src="./src/images/${val.image}" alt="placa de video">
                                                <div class="nome-produto">
                                                    <h2>${val.name}</h2>
                                                </div>
                                                <div class="price">
                                                    <div class="oldprice">
                                                        <span class="oldpricecard">${val.oldPrice}</span>
                                                        <span class="desconto cor-venda">${val.discount}</span>
                                                    </div>
                                                    <div class="newprice">
                                                        <span class="pricecard cor-venda">R$ ${val.newPrice}</span>
                                                        <p>${val.description}</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="btn-cart">
                                                <button key="${val.id}" class="button-cart">Adicionar ao carrinho</button>
                                            </div>
                                        </div>`
        }
    }
    
}

export { screen } 