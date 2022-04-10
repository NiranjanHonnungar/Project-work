if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  var removeCartItemButton = document.getElementsByClassName(
    "cart-quantity-button"
  );
  console.log(removeCartItemButton);
  for (var i = 0; i < removeCartItemButton.length; i++) {
    var button = removeCartItemButton[i];
    button.addEventListener("click", removeCartItem);
  }
  var quantityInput = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInput.length; i++) {
    var input = quantityInput[i];
    input.addEventListener("change", quantityChanged);
  }
  var addToCartButton = document.getElementsByClassName("atc-button");
  for (var i = 0; i < addToCartButton.length; i++) {
    var button = addToCartButton[i];
    button.addEventListener("click", addToCartClicked);
  }
  document
    .getElementsByClassName("purchase-button")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  var cartItems = document.getElementsByClassName("cart-items")[0];
  if (cartItems.childElementCount == 0) {
    alert("No items in cart");
    return;
  }
  alert("Thank you for your purchase");
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  var shopItem = event.target.closest(".product");
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  console.log(title, price, imageSrc);
  addItemtoCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemtoCart(title, price, imageSrc) {
  var cart = document.querySelector(".cart-items");
  if (cart.childElementCount != 0) {
    var cartItemNames = cart.querySelectorAll(".cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
      console.log(cartItemNames[i].innerText);
      if (cartItemNames[i].innerText === title) {
        alert("This item is already added to the cart");
        return;
      }
    }
  }
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" style="width:90px;height:100px"/>
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="cart-quantity-button" role="button">REMOVE</button>
    </div>`;
  cartRow.innerHTML = cartRowContents;
  cart.append(cartRow);
  console.log(cartRow);
  cartRow
    .getElementsByClassName("cart-quantity-button")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function updateCartTotal() {
  var total = 0;
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("₹", ""));
    var quantity = quantityElement?.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "₹" + total;
}
