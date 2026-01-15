
        // mobile navigation from w3Schools
        // https://www.w3schools.com/jsref/met_document_getelementbyid.asp
        function myFunction() {
            var x = document.getElementById("myLinks");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

    // array indexed as follows: 
    // [0]name, [1]color, [2]price, [3]stock [4]image-src, [5]desc.

    const tshirts = [
        ['Legacy T-Shirt','Red','£7.99','good-stock','images/tshirts/tshirt1.jpg','Perfect for those graduating this year. Get a bargain whilst we have the stock.'],
        ['Legacy T-Shirt','Green','£7.99','last-few','images/tshirts/tshirt2.jpg','Limited stock. Grab these nostalgic items before they make their way onto eBay.'],
        ['Legacy T-Shirt','Blue','£7.99','out-of-stock','images/tshirts/tshirt3.jpg','Sadly we are sold out of this legendary item. Keep an eye out for future stock.'],
        ['Legacy T-Shirt','Cyan','£7.99','good-stock','images/tshirts/tshirt4.jpg','Perfect for those graduating this year. Get a bargain whilst we have the stock.'],
        ['Legacy T-Shirt','Magenta','£7.99','out-of-stock','images/tshirts/tshirt5.jpg','Sadly we are sold out of this legendary item. Keep an eye out for future stock.'],
        ['Legacy T-Shirt','Yellow','£7.99','last-few','images/tshirts/tshirt6.jpg','Limited stock. Grab these nostalgic items before they make their way onto eBay.'],
        ['Legacy T-Shirt','Black','£7.99','out-of-stock','images/tshirts/tshirt7.jpg','Sadly we are sold out of this legendary item. Keep an eye out for future stock.'],
        ['Legacy T-Shirt','Grey','£7.99','good-stock','images/tshirts/tshirt8.jpg','Perfect for those graduating this year. Get a bargain whilst we have the stock.'],
        ['Legacy T-Shirt','Burgundy','£7.99','last-few','images/tshirts/tshirt9.jpg','Limited stock. Grab these nostalgic items before they make their way onto eBay.'],
    ];

	// locate the container and the template card
    // https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    const products = document.getElementById('productList'); // where all cards go
    const item = document.getElementById('itemCard');        // the template card

     // function from the slides – stores data for the clicked item in WebAPI
    function webapi(itemIndex) {
        return function () {
            sessionStorage.setItem('index', itemIndex);
            sessionStorage.setItem('name', tshirts[itemIndex][0]);
            sessionStorage.setItem('color', tshirts[itemIndex][1]);
            sessionStorage.setItem('price', tshirts[itemIndex][2]);
            sessionStorage.setItem('stock', tshirts[itemIndex][3]);
            sessionStorage.setItem('src', tshirts[itemIndex][4]);
            sessionStorage.setItem('description', tshirts[itemIndex][5]);

            // go to the detail page
            window.location.href = "item.html";
        };
    }

    // loop through the tshirts array
    for (var i = 0; i < tshirts.length; i++) {

        // create a copy of the template card
        var itemCopy = item.cloneNode(true);   // true = deep clone

        // add the copy into the product list
        products.appendChild(itemCopy);

        // give it a unique id, e.g. "item0", "item1", ...
        var value = "item" + i;
        itemCopy.id = value;

        // write array data into THIS card

        // name + colour
        itemCopy.querySelector('.itemName').innerHTML = tshirts[i][0] + ' (' + tshirts[i][1] + ')';

        // price
        itemCopy.querySelector('.itemPrice').innerHTML = tshirts[i][2];

        // description
        itemCopy.querySelector('.itemDescription').innerHTML = tshirts[i][5];

        // image
        itemCopy.querySelector('.itemImage').src = tshirts[i][4];  // find the <img> inside the card, sets it <src> file path

        // stock
        var stockValue = tshirts[i][3];
        
        // writing stock text into the card
        if (stockValue === "good-stock") {
            itemCopy.querySelector('.itemStock').innerHTML = "In stock";
            document.getElementById(value).onclick = webapi(i);
        }
        else if (stockValue === "last-few") {
            itemCopy.querySelector('.itemStock').innerHTML = "Last few left";
            document.getElementById(value).onclick = webapi(i);
        }
        else {
            itemCopy.querySelector('.itemStock').innerHTML = "Out of stock";

            // differentiate between out of stock and in stock:
            // https://www.w3schools.com/Jsref/prop_style_opacity.asp
            itemCopy.style.opacity = "0.5";

            // unable to click out of stock items
            document.getElementById(value).onclick = null;
        }
	}

	// hide the original template card (like in the slide: item.style.display = 'none')
    item.style.display = 'none';

    

    // // build the product list (similar to lecture example with ul / li)
    // var ul = document.getElementById("productList");

	// for (var i = 0; i < tshirts.length; i++) {
	// 	var value = "item" + i; // unique id for each product

	// 	ul.innerHTML +=
	// 		"<li id='" + value + "' class='productCard'>" +
	// 			"<img class='productImage' src='" + tshirts[i][4] + "' alt='" + tshirts[i][0] + " " + tshirts[i][1] + "'>" +
	// 			"<h2 class='itemHeading'>" + tshirts[i][0] + " (" + tshirts[i][1] + ")</h2>" +
	// 			"<p class='itemPara'>Price: " + tshirts[i][2] + "</p>" +
	// 		"</li>";
	// }


    // attach the click handler to each generated item (lecture Step 4)
    // for (var i = 0; i < tshirts.length; i++) {
    //     var value = "item" + i;
    //     document.getElementById(value).onclick = webapi(i);
    // }