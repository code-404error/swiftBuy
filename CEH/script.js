
  const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  
  toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');
  let scrollAmount = 0;

  rightBtn.addEventListener('click', () => {
    scrollAmount += 260;
    track.style.transform = `translateX(-${scrollAmount}px)`;
  });

  leftBtn.addEventListener('click', () => {
    scrollAmount -= 260;
    if (scrollAmount < 0) scrollAmount = 0;
    track.style.transform = `translateX(-${scrollAmount}px)`;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const cartCount = document.getElementById("cart-count");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Update count on load
  cartCount.textContent = cartItems.length;

  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const product = btn.getAttribute("data-product");
      cartItems.push(product);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      cartCount.textContent = cartItems.length;
      alert(`${product} added to cart!`);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const products = document.querySelectorAll(".product");

  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    products.forEach(product => {
      const title = product.querySelector("h3").textContent.toLowerCase();
      if (title.includes(searchValue)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("newsletter-email");
  const message = document.getElementById("newsletter-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (email) {
      // Save to localStorage (for demo purposes)
      let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
      subscribers.push(email);
      localStorage.setItem("subscribers", JSON.stringify(subscribers));

      // Show confirmation
      message.textContent = "Thank you for subscribing!";
      emailInput.value = "";
    }
  });
});
