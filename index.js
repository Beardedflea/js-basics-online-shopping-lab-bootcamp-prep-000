var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemConstructor = ({itemName: item});
  
  var min = Math.ceil(1);
  var max = Math.floor(100);
  itemConstructor.itemPrice = (Math.random() * (max - min)) + min;
  cart.push(itemConstructor);
  return itemConstructor.itemName +" has been added to your cart.";
}

function viewCart() {
  var cartList = `In your cart, you have `;
  let i = 0;
  switch(cart.length){
    default:
      cartList += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `;
      i++;
    case 2 :
      cartList += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, and `;
      i++;
    case 1 :
      cartList += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
      break;
    case 0:
     cartList = "Your shopping cart is empty.";
  }
  return cartList;

}

function total() {
  let totalCost = 0;
  let i;
  for(i = 0; i < cart.length; i++){
    totalCost += getCart()[i].itemPrice;
  }
  return totalCost
}

function removeFromCart(item) {
 cart.every(isBelowThreshold)
}

function placeOrder(cardNumber) {
  // write your code here
}
