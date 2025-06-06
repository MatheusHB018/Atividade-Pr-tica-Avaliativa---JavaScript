const products = {
    cinza: {
        image: "produto4.png",
        name: "Camiseta Cinza",
        price: "R$ 59,90",
        stock: "15 unidades"
    },
    preta: {
        image: "produto1.png",
        name: "Camiseta Preta",
        price: "R$ 64,90",
        stock: "10 unidades"
    },
    Azul: {
        image: "produto2.png",
        name: "Camiseta Azul",
        price: "R$ 54,90",
        stock: "20 unidades"
    },
    Rosa: {
        image: "produto5.png",
        name: "Camiseta Rosa",
        price: "R$ 69,90",
        stock: "8 unidades"
    }
};

function updateProduct(color) {
    const product = products[color];
    document.getElementById("mainImage").src = product.image;
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productPrice").textContent = `Preço: ${product.price}`;
    document.getElementById("productStock").textContent = `Estoque disponível: ${product.stock}`;
}