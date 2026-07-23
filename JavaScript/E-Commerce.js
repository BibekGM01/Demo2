const ProductContainer = document.getElementById("products");
fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => {
    const cardsHTML = data
    .map(
      (product) =>
        `<div class="card">
          <img src="${product.image}" alt="${product.title}"/>
          <h3>${product.title}</h3>
          <p class="price">${product.price}</p>
          <p class="category">${product.category}
            <p>${product.description}</p>
          </p>
        </div>`
    )
    .join("");
    ProductContainer.innerHTML= cardsHTML
  })
