// https://www.smashingmagazine.com/2014/02/create-client-side-shopping-cart/
// get item from localStorage
// JSON.parse allows strings to go back to JS objects
var item = JSON.parse(localStorage.getItem("cartItem"));

if (item !== null) {
    document.getElementById("cartMessage").innerHTML = "";
    document.getElementById("cartImage").src = item.src;
    document.getElementById("cartName").innerHTML = item.name;
    document.getElementById("cartColor").innerHTML = item.color;
    document.getElementById("cartPrice").innerHTML = item.price;
}
else {
    document.getElementById("cartMessage").innerHTML = "Your cart is empty.";
}
