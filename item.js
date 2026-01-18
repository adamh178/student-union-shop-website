// test commands using console (for debugging only)
console.log("Index:", sessionStorage.getItem("index"));
console.log("Name:", sessionStorage.getItem("name"));
console.log("Color:", sessionStorage.getItem("color"));
console.log("Price:", sessionStorage.getItem("price"));
console.log("Stock:", sessionStorage.getItem("stock"));
console.log("Description:", sessionStorage.getItem("description"));
console.log("Image source:", sessionStorage.getItem("src"));

// When page loads, inject data into HTML
window.onload = function () {

    document.getElementById("itemImage").src = sessionStorage.getItem("src");
    document.getElementById("itemName").innerHTML = sessionStorage.getItem("name");
    document.getElementById("itemColor").innerHTML = sessionStorage.getItem("color");
    document.getElementById("itemPrice").innerHTML = sessionStorage.getItem("price");
    document.getElementById("itemDescription").innerHTML = sessionStorage.getItem("description");

    var stock = sessionStorage.getItem("stock");

    if (stock === "good-stock") {
        document.getElementById("itemStock").innerHTML = "In stock";
    }
    else if (stock === "last-few") {
        document.getElementById("itemStock").innerHTML = "Last few left";
    }
    else {
        document.getElementById("itemStock").innerHTML = "Out of stock";
    }
};

// mobile navigation from w3Schools
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}