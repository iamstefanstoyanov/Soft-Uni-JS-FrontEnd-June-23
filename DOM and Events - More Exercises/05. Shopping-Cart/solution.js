function solve() {
  let allAddButtons = [
    ...document.querySelectorAll("body > div > div > div.product-add > button"),
  ];
  let textarea = document.querySelector("body > div > textarea");

  let producuts = {};

  allAddButtons.forEach((b) => {
    b.addEventListener("click", (e) => {
      const name =
        e.target.parentNode.parentNode.children[1].children[0].textContent;
      const price = Number(
        e.target.parentNode.parentNode.children[3].textContent
      );

      producuts[name] ? (producuts[name] += price) : (producuts[name] = price);

      textarea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    });
  });

  let checkoutButton = document.querySelector('body > div > button');

  checkoutButton.addEventListener('click', (e)=>{
   let purchasedProducts = [];
   let totalPrice = 0;

   for (const [key, value] of Object.entries(producuts)) {
       purchasedProducts.push(key);
       totalPrice += value;
   }

   textarea.textContent += `You bought ${purchasedProducts.join(', ')} for ${totalPrice.toFixed(2)}.`

   allAddButtons.forEach(b => {
       b.removeEventListener('click', addToBasket);
   });

   checkoutButton.removeEventListener('click', checkout);
  });    
}
