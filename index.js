
// get the value from html element
function getElementById(id) {
    const value = parseFloat(document.getElementById(id).innerText);
    if (isNaN(value)) {
      return 0;
    } else {
      return value;
    }
  }
//   set the value to html element
  function setInnerTextOfElements(id, value) {
    document.getElementById(id).innerText = value;
  }
  
// handling add to cart button click

document.getElementById("cart-button").addEventListener("click", function () {
  const productPrice = getElementById("product-price");
  const discountInput = document.getElementById("discount-input").value;
  document.getElementById("discount-input").value = "";
  let priceInCart = getElementById("price-in-cart");
  let discountPrice = getElementById("discount-price");
  let totalPayable = getElementById("total-payable");
  priceInCart = priceInCart + productPrice;
  if (discountInput === "disc30") {
    discountPrice = discountPrice + productPrice * (30 / 100);
    totalPayable = totalPayable + productPrice - discountPrice;
    setInnerTextOfElements("price-in-cart", priceInCart);
    setInnerTextOfElements("total-payable", totalPayable);
    setInnerTextOfElements("discount-price", discountPrice);
  } else {
    window.alert(
      "Discount code is wrong!!!!\nYou will not get any discount...!!!"
    );
    totalPayable = totalPayable + productPrice;
    setInnerTextOfElements("price-in-cart", priceInCart);
    setInnerTextOfElements("total-payable", totalPayable);
    setInnerTextOfElements("discount-price", discountPrice);
  }
});

