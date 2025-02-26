async function fetchProducts(): Promise<void> {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        displayProducts(data.products);
    } catch (error) {
        console.error("상품 데이터를 불러오는 중 오류 발생:", error);
    }
}

function displayProducts(products: { title: string; description: string; price: number; thumbnail: string }[]): void {
    const container = document.getElementById("product-container");
    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <strong>💰 ${product.price} USD</strong>
        `;
        container.appendChild(productCard);
    });
}

fetchProducts();