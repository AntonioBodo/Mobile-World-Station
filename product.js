// Product data (you can replace this with a database or API in the future)
const products = {
    iphone13promax: {
      name: "iPhone 13 Pro Max 256GB Black",
      price: "£330",
      image: "Assets/iphone13promax.avif",
      description: "The iPhone 13 Pro Max features a stunning 6.7-inch Super Retina XDR display, A15 Bionic chip, and an advanced triple-camera system for professional-grade photography."
    },
    iphone15: {
      name: "iPhone 15 128 GB Black",
      price: "£464",
      image: "Assets/iphone15.avif",
      description: "The iPhone 15 offers a sleek design, powerful performance, and advanced camera features to capture every moment."
    },
    iphone16promax: {
      name: "iPhone 16 Pro Max 256GB Desert Titanium",
      price: "£887",
      image: "Assets/iphone16promax.avif",
      description: "The iPhone 16 Pro Max redefines innovation with its cutting-edge technology, stunning design, and unmatched performance."
    }
};

// Function to get query parameters from the URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Load product details based on the query parameter
document.addEventListener("DOMContentLoaded", () => {
  const productKey = getQueryParam("product");
  const product = products[productKey];

  if (product) {
    const productDetails = document.getElementById("product-details");
    productDetails.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p class="price">${product.price}</p>
      <p class="description">${product.description}</p>
      <button class="buy-now">Buy Now</button>
      <button class="add-to-cart">Add to Cart</button>
    `;
  } else {
    document.getElementById("product-details").innerHTML = "<p>Product not found.</p>";
  }
});