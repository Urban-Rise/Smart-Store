// Basic JavaScript for Smart-Store
document.addEventListener('DOMContentLoaded', () => {
  console.log('Smart-Store loaded successfully.');
  if (window.location.pathname.includes('cart.html')) {
    alert('You are viewing your cart.');
  }
});

// وظيفة إضافة المنتج إلى العربة
function addToCart() {
  alert('Product added to cart!');
  console.log('Sample product added to cart.');
}
