
fetch("src/scripts/objects/products.json")
    .then(response => response.json())
    .then(data => {
        const products = data.products;
        const produtosSection = document.querySelector(".product-container");
        const entregaGratisCheckbox = document.getElementById('delivery');
        const promocaoCheckbox = document.getElementById("promotion");
        console.log(produtosSection)

        function inicializarLoja() {
            const produtosFiltrados = products.filter(produto => {
                let atendeFiltros = true;
                if (entregaGratisCheckbox.checked && !produto.entrega_gratis) {
                    atendeFiltros = false;
                }
                if (promocaoCheckbox.checked && !produto.promocao) {
                    atendeFiltros = false;
                }

                return atendeFiltros;
            });


            produtosFiltrados.forEach(produto => {
                const produtoDiv = document.createElement("div");
                produtoDiv.classList.add("product");

                const imagem = document.createElement("img");
                imagem.src = produto.image;
                produtoDiv.appendChild(imagem);

                const nome = document.createElement("h2");
                nome.textContent = produto.name;
                produtoDiv.appendChild(nome);

                const descricao = document.createElement("p");
                descricao.textContent = produto.descricao;
                produtoDiv.appendChild(descricao);

                const price = document.createElement("p");
                price.classList.add("price");
                price.textContent = `R$ ${produto.price.toFixed(2)}`;
                if (produto.promotion) {
                    price.classList.add("promocao");
                    const oldPrice = document.createElement("p")
                    oldPrice.classList.add("promotion")
                    oldPrice.textContent = `R$ ${produto.oldPrice.toFixed(2)}`
                    produtoDiv.appendChild(oldPrice)
                }
                produtoDiv.appendChild(price);

                if (produto.delivery) {
                    const freeDelivery = document.createElement("p");
                    freeDelivery.textContent = "Entrega Grátis";
                    freeDelivery.classList.add("free-delivery");
                    produtoDiv.appendChild(freeDelivery);
                }

                produtosSection.appendChild(produtoDiv);
            })


            // Se não houver produtos para exibir, exibe uma mensagem
            if (produtosFiltrados.length === 0) {
                const mensagem = document.createElement("p");
                mensagem.textContent = "Nenhum produto encontrado";
                produtosSection.appendChild(mensagem);
            }

            
        }

        inicializarLoja()
    })
