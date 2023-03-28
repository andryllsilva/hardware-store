const products = [
    {
        name: "Product name A",
        newPrice: 4500,
        oldPrice: 6500,
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor",
        delivery: true,
        image: 'placadevideo.jpg'
    },

    {
        name: "Product name A",
        newPrice: 4500,
        oldPrice: 6500,
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor",
        delivery: true,
        image: 'placadevideo.jpg'
    },

    {
        name: "Product name A",
        newPrice: 4500,
        oldPrice: 6500,
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor",
        delivery: false,
        image: 'placadevideo.jpg'
    },

    {
        name: "KeyBoard Redragon",
        newPrice: 420,
        oldPrice: 600,
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor",
        delivery: false,
        image: 'reddragon.jpg'
    },

    {
        name: "KeyBoard Redragon",
        newPrice: 420,
        oldPrice: 600,
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor",
        delivery: true,
        image: 'reddragon.jpg'
    },

    {
        name: "KeyBoard Redragon",
        newPrice: 420,
        oldPrice: 600,
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor",
        delivery: false,
        image: 'reddragon.jpg'
    },
]
    




function inicializarLoja(){
    const productContainer = document.querySelector('.product-container')
    products.map((val) =>{
        if(val.delivery == true){
            productContainer.innerHTML += `<div class="product">        
                                            <a href="/">
                                                <img src="./src/images/${val.image}" alt="placa de video">
                                                <div class="nome-produto">
                                                    <h2>${val.name}</h2>
                                                </div>
                                                <div class="price">
                                                    <div class="oldprice">
                                                        <span class="oldpricecard">R$ ${val.oldPrice}</span>
                                                        <span class="desconto cor-venda">${val.descount}%</span>
                                                    </div>
                                                    <div class="newprice">
                                                        <span class="pricecard cor-venda">R$ ${val.newPrice}</span>
                                                        <p>${val.description}</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="btn-cart">
                                                <button>Adicionar ao carrinho</button>
                                            </div>
                                        </div>`
        }else{
            productContainer.innerHTML += `<div class="product">        
                                            <a href="/">
                                                <img src="./src/images/${val.image}" alt="placa de video">
                                                <div class="nome-produto">
                                                    <h2>${val.name}</h2>
                                                </div>
                                                <div class="price">
                                                    <div class="oldprice">
                                                        <span class="oldpricecard">R$ ${val.oldPrice}</span>
                                                        <span class="desconto cor-venda">${val.descount}%</span>
                                                    </div>
                                                    <div class="newprice">
                                                        <span class="pricecard cor-venda">R$ ${val.newPrice}</span>
                                                        <span class="entrega-gratis cor-venda">Entrega grátis</span>
                                                        <p>${val.description}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>`
        }
    })
}
    
inicializarLoja()
 





