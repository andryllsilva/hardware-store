
fetch("src/scripts/objects/products.json")
    .then(response => response.json())
    .then(data => {

        // Seleciona os elementos HTML necessários
        const products = data.products;
        const produtosSection = document.querySelector(".product-container")
        const freeDeliveryCheckbox = document.getElementById('delivery')
        const promotionCheckbox = document.getElementById("promotion")
        const redragonCheckbox = document.getElementById("redragon")
        const keyboardCheckbox = document.getElementById("keyboard")
        const otherCheckbox = document.getElementById("other-checkbox")
        const graphicCardCheckbox = document.getElementById("graphic-card")

        // Contador para os produtos do carrinho fora da função para não resetar toda vez que marcar algum filtro
        let cartCount = 0

        // Função para exibir os produtos com base nos filtros selecionados
        function startShop() {
            // Filtra os produtos com base nos filtros selecionados
            produtosSection.innerHTML = "";
            const produtosFiltrados = products.filter(produto => {
                let atendeFiltros = true;
                if (freeDeliveryCheckbox.checked && !produto.delivery) {
                    atendeFiltros = false;
                }
                if (promotionCheckbox.checked && !produto.promotion) {
                    atendeFiltros = false;
                }
                if (redragonCheckbox.checked && produto.brand != "Redragon") {
                    atendeFiltros = false;
                }
                if (keyboardCheckbox.checked && produto.type != "Keyboard") {
                    atendeFiltros = false;
                }
                if (otherCheckbox.checked && produto.brand != "Other") {
                    atendeFiltros = false;
                }
                if (graphicCardCheckbox.checked && produto.type != "Graphic Card") {
                    atendeFiltros = false;
                }

                return atendeFiltros;
            });

            // Exibe os produtos filtrados na seção de produtos
            produtosFiltrados.forEach(produto => {
                const produtoDiv = document.createElement("div");
                produtoDiv.classList.add("product");

                const linkProduct = document.createElement("a")
                linkProduct.classList.add("link-product")
                linkProduct.setAttribute("href", "#")
                const imagem = document.createElement("img");
                imagem.src = produto.image;
                linkProduct.appendChild(imagem)
                produtoDiv.appendChild(linkProduct);

                const nome = document.createElement("h2");
                nome.textContent = produto.name;
                linkProduct.appendChild(nome)

                const price = document.createElement("p");
                price.classList.add("price");
                price.setAttribute("id", "discount")
                price.textContent = `R$ ${produto.price.toFixed(2)}`;
                if (produto.promotion) {
                    const divPromotion = document.createElement("div")
                    divPromotion.classList.add("promotion")
                    const oldPrice = document.createElement("p")
                    oldPrice.setAttribute("id", "oldPrice")
                    const discount = document.createElement("p")
                    discount.setAttribute("id", "discount")
                    oldPrice.textContent = `R$ ${produto.oldPrice.toFixed(2)}`
                    discount.textContent = `30%`
                    divPromotion.appendChild(oldPrice)
                    divPromotion.appendChild(discount)
                    produtoDiv.appendChild(divPromotion)
                }
                produtoDiv.appendChild(price);

                if (produto.delivery) {
                    const freeDelivery = document.createElement("p");
                    freeDelivery.textContent = "Entrega Grátis";
                    freeDelivery.classList.add("free-delivery");
                    freeDelivery.setAttribute("id", "discount")
                    produtoDiv.appendChild(freeDelivery);
                }

                const description = document.createElement("p");
                description.setAttribute("id", "description")
                description.textContent = produto.description;
                produtoDiv.appendChild(description);

                const divBuyBtn = document.createElement("div")
                divBuyBtn.classList.add("div-buyBtn")
                const buyBtn = document.createElement("button")
                buyBtn.classList.add("buy-btn")
                buyBtn.textContent = "Adicionar ao Carrinho"
                divBuyBtn.appendChild(buyBtn)
                produtoDiv.appendChild(divBuyBtn)
                produtosSection.appendChild(produtoDiv);
            })


            // Se não houver produtos para exibir, exibe uma mensagem
            if (produtosFiltrados.length === 0) {
                const mensagem = document.createElement("p");
                mensagem.textContent = "Nenhum produto encontrado";
                produtosSection.appendChild(mensagem);
            }

            function updateCart() {
                const btnBuyCart = document.querySelectorAll(".buy-btn")
                const cartCounter = document.getElementById("cart-counter")

                btnBuyCart.forEach(button => {
                    button.addEventListener("click", () => {
                        cartCount++
                        cartCounter.textContent = cartCount
                    })
                })
            }

            updateCart()
        }
        startShop()





        // Adiciona eventos para atualizar os produtos quando os filtros são alterados
        
        freeDeliveryCheckbox.addEventListener("change", startShop);
        promotionCheckbox.addEventListener("change", startShop);
        redragonCheckbox.addEventListener("change", startShop)
        keyboardCheckbox.addEventListener("change", startShop)
        otherCheckbox.addEventListener("change", startShop)
        graphicCardCheckbox.addEventListener("change", startShop)
    })
