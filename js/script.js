const products = [
  { id: 1, name: "Product 1", price: 99.99, image: "product1.jpg" },
  { id: 2, name: "Product 2", price: 129.99, image: "product2.jpg" },
  { id: 3, name: "Product 3", price: 79.99, image: "product3.jpg" },
  // Add more products as needed
];

// Function to display products on the page
function displayProducts() {
  const productsContainer = document.querySelector(".products");

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

    productsContainer.appendChild(productElement);
  });
}

// Function to add product to cart
function addToCart(productId) {
  // Simulated function, you would typically add logic to handle cart functionality
  alert(`Product ID ${productId} added to cart`);
}

// Display products when the page loads
document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
});
