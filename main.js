fetch('data.json')
  .then((res) => res.json())
  .then((data) => appendData(data))
  .catch((err) => {
    console.log('err: ' + err);
  });

function appendData(data) {
  var shopContent = document.getElementById('shop-content');
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].foodItems.length; j++) {
      var productBox = document.createElement('div');
      productBox.className = 'product-box';

      var productTitle = document.createElement('h2');
      productTitle.className = 'product-title';
      productTitle.innerHTML = data[i].foodItems[j].foodName;

      var price = document.createElement('span');
      price.className = 'price';
      price.innerHTML = data[i].foodItems[j].price;

      var addCart = document.createElement('i');
      addCart.className = 'bx bxs-cart-add add-cart';

      productBox.appendChild(productTitle);
      productBox.appendChild(price);
      productBox.appendChild(addCart);

      shopContent.appendChild(productBox);
    }
  }
}

// clos-open CART
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
  cart.classList.add('active');
};

closeCart.onclick = () => {
  cart.classList.remove('active');
};

// sth
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

//  ---------- ready ----------
function ready() {
  var removeCartBtn = document.getElementsByClassName('cart-remove');
  for (var i = 0; i < removeCartBtn.length; i++) {
    var button = removeCartBtn[i];
    button.addEventListener('click', removeCartItem);
  }
  var quantityInputs = document.getElementsByClassName('cart-quantity');
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
  var addCart = document.getElementsByClassName('add-cart');
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener('click', addCartClicked);
  }
}

function removeCartItem(event) {
  var btnClicked = event.target;
  btnClicked.parentElement.remove();
  updatetotal();
}

function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
  var price = shopProducts.getElementsByClassName('price')[0].innerText;
  //   console.log(title, price);
  addProductToCart(title, price);
  updatetotal();
}

function addProductToCart(title, price) {
  var cartShopBox = document.createElement('div');
  var cartItems = document.getElementsByClassName('cart-content')[0];
  var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
  for (var i = 0; i < cartItemsNames.length; i++) {
    alert('already ADD');
  }
}

// var cartBoxContent =

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

function updatetotal() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = priceElement.innerText;
    var quantity = quantityElement.value;
    total = total + price * quantity;

    document.getElementsByClassName('total-price')[0].innerText =
      total + ' BAHT';
  }
}
// ------- test -----------
