/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  let body = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  // for(let item of cart.items) {
    for( let i = 0; i < cart.items.length; i++){
    // let product = item.product.name;
    let newRow = document.createElement('tr');
    body.appendChild(newRow);
    // newRow.textContent = product;
    // TODO: Create a TR
    let deleteLink = document.createElement('td');
    deleteLink.className = 'delete';
    deleteLink.id = [i] ;
    deleteLink.textContent = 'X';
    newRow.appendChild(deleteLink);

    let quantity = document.createElement('td');
    quantity.textContent = cart.items[i].quantity;
    newRow.appendChild(quantity);

    let name = document.createElement('td');
    name.textContent = cart.items[i].product;
    newRow.appendChild(name);
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
  }
  // let deleteButt = document.getElementsByClassName('delete');
  //   deleteButt.addEventListener('click', removeItemFromCart());

}

function removeItemFromCart(event) {
  event.preventDefault()
  console.log(event.target.className)

  if ('delete' == event.target.className){
    cart.removeItem(event.target.id);
  };
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.saveToLocalStorage();
  // TODO: Save the cart back to local storage
  // showCart().;
  renderCart();
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
