function changeMainImage(imagePath) {
    document.getElementById("mainProductImage").src = imagePath;
}

function changeModel(modelName, mainImagePath) {
    // Atualiza a imagem principal
    changeMainImage(mainImagePath);
    
    // Atualiza as miniaturas (simplificado - na prática você teria um array de imagens para cada modelo)
    const thumbnails = document.querySelectorAll(".thumbnails img");
    for (let i = 0; i < thumbnails.length; i++) {
        const color = modelName.toLowerCase();
        thumbnails[i].src = `luvas-${color}-${i+1}.jpg`;
        thumbnails[i].onclick = function() {
            changeMainImage(`luvas-${color}-${i+1}.jpg`);
        };
    }
    
    // Atualiza o título (opcional)
    document.querySelector("h1").textContent = `Luvas de Boxe ADIDAS - ${modelName}`;
}