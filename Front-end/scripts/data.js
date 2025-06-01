// Dummy products data
const products = [
    {
        id: 1,
        name: "Trending Shirt",
        price: 29.99,
        image: "product_31.png",
        category: "Men"
    },
    {
        id: 2,
        name: "Casual Shirt",
        price: 19.99,
        image: "product_31.png",
        category: "Men"
    },
    {
        id: 3,
        name: "Formal Shirt",
        price: 39.99,
        image: "product_31.png",
        category: "Men"
    },
    {
        id: 4,
        name: "Summer Dress",
        price: 24.99,
        image: "product_31.png",
        category: "Women"
    },
    {
        id: 5,
        name: "Party Dress",
        price: 49.99,
        image: "product_31.png",
        category: "Women"
    }
];

// Function to dynamically create .crd elements
function createCards() {
    const mensCardContainer = document.querySelector("#mens-card");
    const womensCardContainer = document.querySelector("#trend-sec .card");
    
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("crd");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onclick="showProduct(${product.id})">
            <div class="crd-text">
                <h2>${product.name}</h2>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <br>
                <button onclick="addToCart(${product.id})">add to cart</button>
            </div>
        `;
        if (product.category === "Men") {
            mensCardContainer.appendChild(card);
        } else if (product.category === "Women") {
            womensCardContainer.appendChild(card);
        }
    });
}

// Function to show product details in the cart section
function showProduct(productId) {
    const product = products.find(p => p.id === productId);
    const cartImage = document.querySelector(".cart #newImg");
    const cartText = document.querySelector(".cart .cartText");
    
    cartImage.src = product.image;
    cartText.querySelector("h1").innerHTML = `Trends Offer: ${product.name} Shop Now`;
    cartText.querySelector("h2").innerHTML = `Special Price: $${product.price}`;
    cartText.querySelectorAll("p")[0].innerHTML = product.description || "Lorem ipsum dolor sit, amet consectetur adipisicing.";
    cartText.querySelectorAll("p")[1].innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing.";
    cartText.querySelectorAll("p")[2].innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing.";
    
    hideAllSections();
    document.querySelector(".cart").style.display = "block";
}

// Function to add product to cart
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}

// Functions to manage navigation
function homes() {
    hideAllSections();
    document.querySelector('.main').style.display = 'block';
}

function shops() {
    hideAllSections();
    document.querySelectorAll('.trend').forEach(element => {
        element.style.display = 'block';
    });
}

function blogs() {
    hideAllSections();
    document.querySelector('.trends').style.display = 'block';
}

function abouts() {
    hideAllSections();
    document.querySelector('.about').style.display = 'block';
}

function contacts() {
    hideAllSections();
    document.querySelector('.contact').style.display = 'block';
}

function hideAllSections() {
    document.querySelectorAll('.main, .trend, .trends, .about, .contact, .cart').forEach(element => {
        element.style.display = 'none';
    });
}

// Call createCards on page load
document.addEventListener("DOMContentLoaded", createCards);
